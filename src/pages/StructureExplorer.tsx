// import { Rings } from 'react-loader-spinner';

import { DrawStructure } from '../components/StructureExplorer/DrawStructure';
import { MoleculeList } from '../components/StructureExplorer/MoleculeList';
import { Wikipedia } from '../components/StructureExplorer/Wikipedia';
// import useGetData from '../hooks/useGetData';

export function StructureExplorer(): JSX.Element {
  // const { loading } = useGetData();
  const data = {
    id: 1525,
    code: 'Aspirin',
    smiles: 'O=C(C)Oc1ccccc1C(=O)O',
    mf: { type: 'mf', value: 'C9H8O4' },
    mw: 180.157769,
    em: 180.0422587362,
    actIdx: [
      -112315120, 1108419073, 269488260, 25167105, -2147483648, 274434,
      19144724, 33554432, 152569888, 2097152, 67502088, 1208232960, -1609564160,
      134221824, -2146435072, 335642636,
    ],
    actID: { type: 'actelionID', value: 'dklB@@QmR[fUxUZBBF@@' },
  };

  return (
    <div className="">
      {/* {loading ? (
        <div className="-mt-12 flex h-screen flex-col items-center justify-center">
          <Rings
            height="120"
            width="120"
            color="#92BEDF"
            radius="6"
            wrapperStyle={{}}
            wrapperClass=""
            visible
          />
        </div>
      ) : ( */}
      <div className="py-14 px-20 xl:px-28 2xl:px-60">
        <div className="flex justify-center space-x-5">
          <DrawStructure />
          <MoleculeList {...data} />
        </div>
        <Wikipedia />
      </div>
      {/* )} */}
    </div>
  );
}
