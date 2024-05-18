import OCL from 'openchemlib/full';
import { MoleculesDB } from 'openchemlib-utils';

import { isInterestingMF } from './is_interesting_mf';

export async function fetchData() {
  const response = await fetch('data.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  const json = await response.json();
  enhanceData(json.data);

  const moleculesDB = new MoleculesDB(OCL);

  for (const entry of json.data.molecules) {
    const molecule = OCL.Molecule.fromIDCode(entry.actID.value, false);
    moleculesDB.pushEntry(molecule, entry, {
      index: entry.act_idx,
      idCode: entry.actID.value,
      mw: entry.mw,
    });
  }

  return {
    data: json,
    moleculesDB,
  };
}

function enhanceData(data: any) {
  const molecules = data.molecules;

  // Add a sequential number to interesting molecules for the "molecule of the day".
  let interestingId = 1;
  for (const molecule of molecules) {
    molecule.interestingId = isInterestingMF(molecule.mf.value)
      ? interestingId++
      : -1;
  }

  // Compute the id for the molecule of the day.
  const skip = 131; // Should be a prime number.
  const maxId = interestingId - (interestingId % skip) + 1;
  const currentDayId =
    // 19860 is the number of days since 01.01.1970 as of 18.05.2024.
    ((Math.floor(Date.now() / 86400000) - 19860) * skip) % maxId;

  molecules.sort((a: any, b: any) => {
    if (a.interestingId === currentDayId) return -1;
    if (b.interestingId === currentDayId) return 1;
    return 0;
  });
}
