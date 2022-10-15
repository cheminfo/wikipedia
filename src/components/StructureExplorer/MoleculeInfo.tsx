import { IdcodeSvgRenderer } from 'react-ocl';

import { IMolecule } from '../../hooks/useGetData';

export function MoleculeInfo(data: IMolecule): JSX.Element {
  return (
    <div className="flex h-48 flex-col items-center justify-between border py-1 text-xs font-bold hover:bg-[#EAEBED]">
      <div className="">{data.code}</div>
      <div className="">
        <IdcodeSvgRenderer height={135} width={180} idcode={data.actID.value} />
      </div>
      <div className="">
        <div className="flex space-x-3">
          <div className="">MF:</div>
          <div className="font-normal">{data.mf.value}</div>
        </div>
        <div className="flex space-x-2">
          <div className="">MW:</div>
          <div className="font-normal">{data.mw}</div>
        </div>
      </div>
    </div>
  );
}
