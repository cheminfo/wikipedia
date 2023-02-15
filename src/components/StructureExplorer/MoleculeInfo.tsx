import clsx from 'clsx';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { MF } from 'react-mf';
import { IdcodeSvgRenderer } from 'react-ocl';

import { IMolecule } from '../../hooks/DataContext';
import { useIdContext } from '../../hooks/IdContext';

interface MoleculeInfoProps {
  mol: IMolecule;
}

export function MoleculeInfo({ mol }: MoleculeInfoProps): JSX.Element {
  const { selectedTitle, setSelectedTitle } = useIdContext();

  return (
    <button
      type="button"
      className={clsx(
        'group flex h-[217px] w-full flex-col items-center justify-between overflow-hidden border py-2 px-1 text-xs',
        {
          'border-darkgray bg-darkgray': mol.code === selectedTitle,
          'hover:bg-lightgray': mol.code !== selectedTitle,
        },
      )}
      onClick={() => setSelectedTitle(mol.code)}
    >
      <div className="mx-5 text-center font-bold">{mol.code}</div>
      <a
        href={`https://en.wikipedia.org/wiki/${mol.code}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineQuestionCircle className="absolute top-1.5 right-2 transform cursor-help text-xl text-darkblue opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100" />
      </a>
      <div>
        <IdcodeSvgRenderer height={135} width={180} idcode={mol.actID.value} />
      </div>
      <div className="flex flex-wrap justify-center gap-x-1">
        <div>
          <MF mf={mol.mf.value} />
        </div>
        <div className="flex">
          (<div className="mr-0.5 font-bold">mw:</div>
          <div>{mol.mw.toFixed(2)}</div>)
        </div>
      </div>
    </button>
  );
}
