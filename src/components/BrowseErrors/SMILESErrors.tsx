import { ErrorSection } from './ErrorSection';

function SMILESErrorTable(): JSX.Element {
  return (
    <div className="mb-5 flex flex-col rounded-md bg-white text-sm shadow-md">
      <div className="grid grid-cols-5">
        <div className="col-span-1 flex items-center justify-between rounded-tl-md bg-[#92BEDF] px-5 py-2 text-[#0A4E7A]">
          Article ID
        </div>
        <div className="col-span-2 flex items-center justify-between bg-[#92BEDF] px-5 py-2 text-[#0A4E7A]">
          SMILES
        </div>
        <div className="col-span-2 flex items-center justify-between rounded-tr-md bg-[#92BEDF] px-5 py-2 text-[#0A4E7A]">
          Error message
        </div>
        {/* DATA */}
        <div className="scrollbar col-span-5 h-[194px] overflow-y-auto">
          <ContentRow id={5} SMILES="cc" message="cc" />
          <ContentRow id={5} SMILES="cc" message="cc" />
          <ContentRow id={5} SMILES="cc" message="cc" />
          <ContentRow id={5} SMILES="cc" message="cc" />
          <ContentRow id={5} SMILES="cc" message="cc" />
          <ContentRow id={5} SMILES="cc" message="cc" />
          <ContentRow id={5} SMILES="cc" message="cc" />
          <ContentRow id={5} SMILES="cc" message="cc" />
          <ContentRow id={5} SMILES="cc" message="cc" />
        </div>
      </div>
      <div className="-mt-1 bg-[#92BEDF] px-5 py-2 text-[#0A4E7A]">
        Hovered SMILES
      </div>
      <div className="break-all px-5 py-3">
        [H]/N=C(\N)/NCCC[C@@H](C(=O)N[C@@H](C(C)C)C(=O)N[C@@H]H](C(C)C)C(=O)N[C@@H]H](C(C)C)C(=O)N[C@@H]
      </div>
    </div>
  );
}

export interface Props {
  id: number;
  SMILES: string;
  message: string;
}

function ContentRow(props: Props): JSX.Element {
  return (
    <div className="grid grid-cols-5 hover:bg-[#EAEBED]">
      <div className="col-span-1 border px-5 py-2">{props.id}</div>
      <div className="col-span-2 border px-5 py-2">{props.SMILES}</div>
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
