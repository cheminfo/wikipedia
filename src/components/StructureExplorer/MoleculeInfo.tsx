import { IdcodeSvgRenderer } from 'react-ocl';

import { IMolecule } from '../../hooks/DataContext';
import { useIdContext } from '../../hooks/IdContext';

interface Props {
  mol: IMolecule;
}

export function MoleculeInfo({ mol }: Props): JSX.Element {
  const { setSelectedId } = useIdContext();

  return (
    <div
      className="flex h-48 flex-col items-center justify-between border py-1 text-xs font-bold hover:bg-[#EAEBED]"
      onClick={() => setSelectedId(mol.id)}
    >
      <div className="">{mol.code}</div>
      <div className="">
        <IdcodeSvgRenderer height={135} width={180} idcode={mol.actID.value} />
      </div>
      <div className="">
        <div className="flex space-x-3">
          <div className="">MF:</div>
          <div className="font-normal">{mol.mf.value}</div>
        </div>
        <div className="flex space-x-2">
          <div className="">MW:</div>
          <div className="font-normal">{mol.mw}</div>
        </div>
      </div>
    </div>
  );
}
