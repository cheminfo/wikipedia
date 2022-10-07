import { useState } from 'react';

import useGetData from '../../hooks/useGetData';

import { ErrorSection } from './ErrorSection';

function SMILESErrorTable(): JSX.Element {
  const { errors } = useGetData();
  const [hoveredSmiles, setHoveredSmiles] = useState('');

  return (
    <div className="mb-5 flex flex-col rounded-lg bg-white shadow-md">
      <div className="grid grid-cols-5 rounded-t-lg bg-[#92BEDF] text-sm text-[#0A4E7A]">
        <div className="col-span-1 px-5 py-2">Article ID</div>
        <div className="col-span-2 px-5 py-2">SMILES</div>
        <div className="col-span-2 px-5 py-2">Error message</div>
        <div className="scrollbar col-span-5 h-[204px] overflow-y-auto bg-white text-xs text-black">
          {errors.map((error) => (
            <ContentRow
              key={error.id}
              id={error.id}
              smiles={error.smiles}
              message={error.message}
              setHoveredSmiles={setHoveredSmiles}
            />
          ))}
        </div>
      </div>
      <div className="bg-[#92BEDF] px-5 py-2 text-sm text-[#0A4E7A]">
        Hovered SMILES
      </div>
      <div className="scrollbar flex h-20 items-center overflow-y-auto break-all px-5 py-3 text-xs">
        {hoveredSmiles}
      </div>
    </div>
  );
}

export interface Props {
  id: number;
  smiles: string;
  message: string;
  setHoveredSmiles: React.Dispatch<React.SetStateAction<string>>;
}

function ContentRow(props: Props): JSX.Element {
  return (
    <div
      className="grid grid-cols-5 hover:bg-[#EAEBED]"
      onMouseEnter={() => props.setHoveredSmiles(props.smiles)}
    >
      <div className="col-span-1 border px-5 py-2">{props.id}</div>
      <div className="col-span-2 truncate border px-5 py-2">{props.smiles}</div>
      <div className="col-span-2 border px-5 py-2">{props.message}</div>
    </div>
  );
}

export interface Prop {
  number: string;
}
export function SMILESErrors(prop: Prop): JSX.Element {
  return (
    <ErrorSection
      title="SMILES with errors :"
      number={prop.number}
      description="SMILES that could not be processed by the parser"
      table={<SMILESErrorTable />}
    />
  );
}
