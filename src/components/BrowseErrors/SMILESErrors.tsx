import { useState } from 'react';

import { useErrorContext } from '../../hooks/ErrorContext';
import useGetData from '../../hooks/useGetData';

import { ErrorSection } from './ErrorSection';

function SMILESErrorTable(): JSX.Element {
  const { errors } = useGetData();
  const [hoveredSmiles, setHoveredSmiles] = useState('');

  return (
    <div className="mb-5 flex flex-col rounded-lg bg-white shadow-md">
      <div className="grid grid-cols-8 rounded-t-lg bg-[#92BEDF] text-sm text-[#0A4E7A]">
        <div className="col-span-2 px-3 py-2">Article ID</div>
        <div className="col-span-2 px-3 py-2">SMILES</div>
        <div className="col-span-4 px-3 py-2">Error message</div>
        <div className="scrollbar col-span-8 h-[204px] overflow-y-auto bg-white text-xs text-black">
          {errors.map(({ id, smiles, error }) => (
            <a
              href={`https://en.wikipedia.org/wiki?curid=${id}`}
              target="_blank"
              rel="noopener noreferrer"
              key={smiles}
              className="cursor-pointer"
            >
              <ContentRow
                key={id}
                id={id}
                smiles={smiles}
                error={error}
                setHoveredSmiles={setHoveredSmiles}
              />
            </a>
          ))}
        </div>
      </div>
      <div className="bg-[#92BEDF] px-3 py-2 text-sm text-[#0A4E7A]">
        Hovered SMILES
      </div>
      <div className="scrollbar h-22 flex items-center overflow-y-auto break-all p-3 text-xs">
        {hoveredSmiles}
      </div>
    </div>
  );
}

export interface Props {
  id: number;
  smiles: string;
  error: string;
  setHoveredSmiles: React.Dispatch<React.SetStateAction<string>>;
}

function ContentRow(props: Props): JSX.Element {
  const { setHoverId } = useErrorContext();
  return (
    <div
      className="grid grid-cols-8 overflow-x-hidden hover:bg-[#EAEBED]"
      onMouseEnter={() => {
        props.setHoveredSmiles(props.smiles);
        setHoverId(props.id);
      }}
      onMouseLeave={() => {
        setHoverId(null);
      }}
    >
      <div className="col-span-2 flex justify-center border px-3 py-2">
        {props.id}
      </div>
      <div className="col-span-2 truncate border px-3 py-2">{props.smiles}</div>
      <div className="col-span-4 border px-3 py-2">{props.error}</div>
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
