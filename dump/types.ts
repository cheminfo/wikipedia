export type WikiIds = number[];

export type WikiRevs = WikiRev[];
export interface WikiRev {
  id: number;
  rev: number;
}

export type WikiRevMissing = WikiIds;
export type WikiUpdate = WikiRevs;

export interface WikipediaJson {
  stats: WikipediaStats;
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
  /**
   * Wikipedia page id.
   */
  id: number;

  /**
   * Wikipedia page title.
   */
  title: string;

  /**
   * SMILES string.
   */
  smiles: string;

  /**
   * Molecular formula.
   */
  mf: string;

  /**
   * Molecular weight.
   */
  mw: number;

  /**
   * Exact mass.
   */
  em: number;

  /**
   * OpenChemLib molecule's id code.
   */
  idCode: string;

  /**
   * Precomputed index for the substructure search.
   */
  sssIndex: number[];
}
