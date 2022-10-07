import { Duplicates } from '../components/BrowseErrors/Duplicates';
import { NoCorrectSMILES } from '../components/BrowseErrors/NoCorrectSMILES';
import { NotFound } from '../components/BrowseErrors/NotFound';
import { SMILESErrors } from '../components/BrowseErrors/SMILESErrors';
import useGetData from '../hooks/useGetData';

export function BrowseErrors(): JSX.Element {
  const { date, dupLength, notfoundLength, errorsLength, nogoodLength } =
    useGetData();
  return (
    <div className="py-14 px-20 xl:px-28 2xl:px-60">
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
      <div className="mt-12 flex flex-wrap justify-between gap-y-20">
        <Duplicates number={dupLength} />
        <NotFound number={notfoundLength} />
        <SMILESErrors number={errorsLength} />
        <NoCorrectSMILES number={nogoodLength} />
      </div>
    </div>
  );
}
