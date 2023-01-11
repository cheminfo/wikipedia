import { MF } from 'react-mf';
import { IdcodeSvgRenderer } from 'react-ocl';

import { IMolecule } from '../../hooks/DataContext';
import { useIdContext } from '../../hooks/IdContext';

interface MoleculeInfoProps {
  mol: IMolecule;
}

export function MoleculeInfo({ mol }: MoleculeInfoProps): JSX.Element {
  const { setSelectedTitle } = useIdContext();

  return (
    <div
      className="flex h-[217px] flex-col items-center justify-between overflow-hidden border py-2 px-1 text-xs hover:bg-lightgray"
      onClick={() => setSelectedTitle(mol.code)}
    >
      <div className="text-center font-bold">{mol.code}</div>
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
    </div>
  );
}
