import { DrawStructure } from '../components/DrawStructure';
import { Grid } from '../components/Grid';
import { Wikipedia } from '../components/Wikipedia';

export function StructureExplorer(): JSX.Element {
  return (
    <div className="mx-56 mt-4">
      <div className="flex justify-center space-x-5">
        <DrawStructure />
        <Grid />
      </div>
      <Wikipedia />
    </div>
  );
}
