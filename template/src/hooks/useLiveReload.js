import { useEffect } from 'react';

const useLiveReload = () => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    if (process.env.NODE_ENV !== 'production') {
      new EventSource('/esbuild').addEventListener('change', () => {
        console.log('reload');
        window.location.reload();
      });
    }
  }, []);
};
export default useLiveReload;