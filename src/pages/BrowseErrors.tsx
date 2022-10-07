import { Duplicates } from '../components/BrowseErrors/Duplicates';
import { NoCorrectSMILES } from '../components/BrowseErrors/NoCorrectSMILES';
import { NotFound } from '../components/BrowseErrors/NotFound';
import { SMILESErrors } from '../components/BrowseErrors/SMILESErrors';
import useGetData from '../hooks/useGetData';

export function BrowseErrors(): JSX.Element {
  const { date, dupLength, notfoundLength, errorsLength, nogoodLength } =
    useGetData();
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
        <Duplicates number={dupLength} />
        <NotFound number={notfoundLength} />
        <SMILESErrors number={errorsLength} />
        <NoCorrectSMILES number={nogoodLength} />
      </div>
    </div>
  );
}
