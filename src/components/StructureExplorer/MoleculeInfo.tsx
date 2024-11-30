import clsx from 'clsx';
import { AiOutlineLink, AiOutlineSearch } from 'react-icons/ai';
import { MF } from 'react-mf';
import { IdcodeSvgRenderer } from 'react-ocl';

import { useMoleculeContext } from '../../contexts/molecule_context.js';
import { ExtendedWikipediaMolecule } from '../../hooks/fetch_data.js';
import Hint from '../Hint.js';

interface MoleculeInfoProps {
  mol: ExtendedWikipediaMolecule;
}

export function MoleculeInfo({ mol }: MoleculeInfoProps) {
  const { selectedStructure, setSelectedStructure, setSearch, setIdAndIdCode } =
    useMoleculeContext();

  const isSelected =
    mol.id === selectedStructure?.id &&
    mol.idCode === selectedStructure?.idCode;

  return (
    <button
      type="button"
      className={clsx(
        'group flex h-[217px] w-full flex-col items-center justify-between overflow-hidden border py-2 px-1 text-xs',
        {
          'border-darkgray bg-darkgray': isSelected,
          'hover:bg-lightgray': !isSelected,
        },
      )}
      onClick={() => setSelectedStructure(mol)}
    >
      <Hint info="Similar molecules" className="absolute top-1.5 left-2">
        <div
          onClick={() => {
            setIdAndIdCode({ id: mol.id, idCode: mol.idCode });
            setSearch('similarity');
          }}
        >
          <AiOutlineSearch className="transform text-xl text-darkblue opacity-0 transition-all duration-150 ease-in-out hover:scale-125 group-hover:opacity-100" />
        </div>
      </Hint>
      <div className="mx-5 text-center font-bold">{mol.title}</div>
      <Hint info="Wikipedia article" className="absolute top-1.5 right-2">
        <a
          href={`https://en.wikipedia.org/wiki/${mol.title}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineLink className="transform text-xl text-darkblue opacity-0 transition-all duration-150 ease-in-out hover:scale-125 group-hover:opacity-100" />
        </a>
      </Hint>
      <div>
        <IdcodeSvgRenderer height={135} width={180} idcode={mol.idCode} />
      </div>
      <div className="flex flex-wrap justify-center gap-x-1">
        <div>
          <MF mf={mol.mf} />
        </div>
        <div className="flex">
          (<div className="mr-0.5 font-bold">mw:</div>
          <div>{mol.mw.toFixed(2)}</div>)
        </div>
      </div>
    </button>
  );
}
