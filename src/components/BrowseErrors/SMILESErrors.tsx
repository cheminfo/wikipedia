import { Dispatch, SetStateAction, useState } from 'react';

import { useMoleculeContext } from '../../contexts/molecule_context';

import { ErrorSection } from './ErrorSection';

interface ISMILEError {
  id: number;
  smiles: string;
  error: string;
}

interface SMILESErrorTableProps {
  data: ISMILEError[];
}

interface ContentRowProps extends ISMILEError {
  setHoveredSmiles: Dispatch<SetStateAction<string>>;
}

interface SMILESErrorsProps extends SMILESErrorTableProps {
  number: number;
}

function SMILESErrorTable({ data }: SMILESErrorTableProps) {
  const [hoveredSmiles, setHoveredSmiles] = useState('');

  return (
    <div className="mb-5 flex flex-col rounded-lg bg-white shadow-md">
      <div className="grid grid-cols-8 rounded-t-lg bg-lightblue text-sm text-darkblue">
        <div className="col-span-2 px-3 py-2">Article ID</div>
        <div className="col-span-2 px-3 py-2">SMILES</div>
        <div className="col-span-4 px-3 py-2">Error message</div>
        <div className="scrollbar col-span-8 h-[204px] overflow-y-auto bg-white text-xs text-black">
          {data.map(({ id, smiles, error }) => (
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
      <div className="bg-lightblue px-3 py-2 text-sm text-darkblue">
        Hovered SMILES
      </div>
      <div className="scrollbar h-22 flex items-center overflow-y-auto break-all p-3 text-xs">
        {hoveredSmiles}
      </div>
    </div>
  );
}

function ContentRow(props: ContentRowProps) {
  const { setSelectedId } = useMoleculeContext();
  return (
    <div
      className="grid grid-cols-8 overflow-x-hidden hover:bg-lightgray"
      onMouseEnter={() => {
        props.setHoveredSmiles(props.smiles);
        setSelectedId(props.id);
      }}
      onMouseLeave={() => {
        setSelectedId(-1);
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

export function SMILESErrors(props: SMILESErrorsProps) {
  return (
    <ErrorSection
      title="SMILES with errors:"
      number={props.number}
      description="SMILES that could not be processed by the parser"
      table={<SMILESErrorTable data={props.data} />}
    />
  );
}
