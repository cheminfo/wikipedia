export interface WikipediaJson {
  count: WikipediaStats;
  data: WikipediaData;
}

export interface WikipediaStats {
  date: string;
  molecules: number;
  errors: number;
  nogood: number;
  notfound: number;
  dup: number;
}

export interface WikipediaData {
  molecules: WikipediaMolecule[];
  errors: Array<{ id: number; smiles: string; error: string }>;
  dup: number[];
  notfound: number[];
  nogood: number[];
}

export interface WikipediaMolecule {
  id: number;
  code: string;
  smiles: string;
  mf: { type: string; value: string };
  mw: number;
  em: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  act_idx: number[];
  actID: { type: string; value: string };
}
