import { DrawStructure } from '../components/StructureExplorer/DrawStructure';
import { MoleculeList } from '../components/StructureExplorer/MoleculeList';
import { Wikipedia } from '../components/StructureExplorer/Wikipedia';

export function StructureExplorer(): JSX.Element {
  return (
    <div className="py-14 px-20 xl:px-28 2xl:px-60">
      <div className="flex justify-center space-x-5">
        <DrawStructure />
        <MoleculeList />
      </div>
      <Wikipedia />
    </div>
  );
}
