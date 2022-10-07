import { DrawStructure } from '../components/StructureExplorer/DrawStructure';
import { MoleculeList } from '../components/StructureExplorer/MoleculeList';
import { Wikipedia } from '../components/StructureExplorer/Wikipedia';

export function StructureExplorer(): JSX.Element {
  return (
    <div className="mx-56 mt-4">
      <div className="flex justify-center space-x-5">
        <DrawStructure />
        <MoleculeList />
      </div>
      <Wikipedia />
    </div>
  );
}
