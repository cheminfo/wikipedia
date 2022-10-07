import { useEffect, useState } from 'react';

import { Duplicates } from '../components/BrowseErrors/Duplicates';
import { NoCorrectSMILES } from '../components/BrowseErrors/NoCorrectSMILES';
import { NotFound } from '../components/BrowseErrors/NotFound';
import { SMILESErrors } from '../components/BrowseErrors/SMILESErrors';

export function BrowseErrors(): JSX.Element {
  const [date, setDate] = useState('');
  const [dup, setDup] = useState('');
  const [notfound, setNotfound] = useState('');
  const [nogood, setNogood] = useState('');
  const [errors, setErrors] = useState('');

  useEffect(() => {
    void fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setDate(JSON.stringify(myJson.count.date).slice(1, 11));
        setDup(JSON.stringify(myJson.count.dup));
        setNotfound(JSON.stringify(myJson.count.notfound));
        setNogood(JSON.stringify(myJson.count.nogood));
        setErrors(JSON.stringify(myJson.count.errors));
      });
  }, []);

  return (
    <div className="mx-56 mt-14">
      <div className="text-[#0A4E7A]">
        <div className="">
          <div className="text-4xl">Articles with SMILES problems</div>
          <div className="flex space-x-1 font-light">
            <div className="">Last data extraction :</div>
            <div className="">{date}</div>
          </div>
        </div>
        <div className="my-5 font-normal">
          Click on any cell to open the corresponding article on Wikipedia
        </div>
      </div>
      <div className="mt-12 grid-cols-2 gap-x-28 xl:grid">
        <Duplicates number={dup} />
        <NotFound number={notfound} />
        <SMILESErrors number={errors} />
        <NoCorrectSMILES number={nogood} />
      </div>
    </div>
  );
}
