import { useState, useEffect } from 'react';

export interface IMolecule {
  id: number | null;
  code: string | '';
  smiles: string | '';
  mf: { type: string | ''; value: string | '' };
  mw: number | null;
  em: number | null;
  actIdx: number[] | [];
  actID: { type: string | ''; value: string | '' };
}

export default function useGetData() {
  const [data, setData] = useState<IMolecule[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setData(myJson.data.molecules);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        // eslint-disable-next-line no-alert
        alert('An error has occured while fetching the data');
      });
  }, [data]);
  return { data, loading };
}
