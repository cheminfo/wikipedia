/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'openchemlib-utils' {
  export function search(
    moleculesDB: string,
    options: {
      format: string;
      mode: string;
      flattenResults?: boolean;
      keepMolecules?: boolean;
      limit?: number;
    },
  ): void;

  declare class MoleculesDB {
    constructor(OCL: any, options?: any);
    pushEntry(molecule: any, data: any, moleculeInfo: any): void;
    search(
      moleculesDB: string,
      options: {
        format: string;
        mode: string;
        flattenResults?: boolean;
        keepMolecules?: boolean;
        limit?: number;
      },
    ): any;
    getDB(): any;
  }
}
