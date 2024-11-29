import OCL from 'openchemlib/full';
import { MoleculesDB } from 'openchemlib-utils';

import {
  WikipediaData,
  WikipediaJson,
  WikipediaMolecule,
} from '../../dump/types.js';

import { isInterestingMF } from './is_interesting_mf.js';

export async function fetchData() {
  const response = await fetch('data.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  const json: WikipediaJson = await response.json();
  const extendedJson = extendJson(json);

  const moleculesDB = new MoleculesDB(OCL);

  for (const entry of extendedJson.data.molecules) {
    const molecule = OCL.Molecule.fromIDCode(entry.idCode, false);
    moleculesDB.pushEntry(molecule, entry, {
      idCode: entry.idCode,
      index: entry.sssIndex,
      mw: entry.mw,
    });
  }

  return {
    data: extendedJson,
    moleculesDB,
  };
}

export interface ExtendedWikipediaJson extends WikipediaJson {
  data: ExtendedWikipediaData;
}

export interface ExtendedWikipediaData extends WikipediaData {
  molecules: ExtendedWikipediaMolecule[];
}

export interface ExtendedWikipediaMolecule extends WikipediaMolecule {
  interestingId: number;
}

function extendJson(wikipediaJson: WikipediaJson): ExtendedWikipediaJson {
  const extendedJson: ExtendedWikipediaJson = {
    ...wikipediaJson,
    data: { ...wikipediaJson.data, molecules: [] },
  };
  const extendedMolecules = extendedJson.data.molecules;

  // Add a sequential number to interesting molecules for the "molecule of the day".
  let interestingIdCounter = 1;
  for (const molecule of wikipediaJson.data.molecules) {
    const interestingId = isInterestingMF(molecule.mf)
      ? interestingIdCounter++
      : -1;
    extendedMolecules.push({
      ...molecule,
      interestingId,
    });
  }

  // Compute the id for the molecule of the day.
  const skip = 5; // A small number allows to focus on the old wikipedia articles
  const maxId = interestingIdCounter - (interestingIdCounter % skip) + 1;
  const currentDayId =
    // 19860 is the number of days since 01.01.1970 as of 18.05.2024.
    ((Math.floor(Date.now() / 86400000) - 19860) * skip) % maxId;

  extendedMolecules.sort((a, b) => {
    if (a.interestingId === currentDayId) return -1;
    if (b.interestingId === currentDayId) return 1;
    return 0;
  });

  return extendedJson;
}
