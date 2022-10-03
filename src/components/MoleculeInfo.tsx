export function MoleculeInfo(): JSX.Element {
  return (
    <div className="flex h-48 flex-col items-center justify-between border py-1 text-xs font-bold">
      <div className="">Name</div>
      <div className="">Molecule</div>
      <div className="">
        <div className="flex space-x-3">
          <div className="">MF:</div>
          <div className="font-normal">nn</div>
        </div>
        <div className="flex space-x-2">
          <div className="">MW:</div>
          <div className="font-normal">nn</div>
        </div>
      </div>
    </div>
  );
}
