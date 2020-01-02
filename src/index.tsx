import { useEffect, useState } from 'react';

import loadable from '@loadable/component';

export const useLibInSSR = async (libraryName: string) => {
  const [{ loading }, setLoading] = useState<{ loading: boolean }>({
    loading: false
  });
  const [{ library }, set] = useState<{ library: object | null }>({
    library: null
  });
  const _lib = loadable.lib(() => import(libraryName));

  useEffect(() => {
    if (typeof window !== "undefined") {
      (async () => {
        setLoading({ loading: true });
        const lib = await _lib.load();
        set({ library: lib });
        setLoading({ loading: false });
      })();
    }
  }, []);
  return [loading, library];
};
