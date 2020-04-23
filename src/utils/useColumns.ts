import { useEffect, useState, useCallback, RefObject } from 'react';
import { debounce } from './helpers';

const getColumnsAmount = (width: number): number => {
  if (width > 768) {
    return 3;
  }

  if (width > 500) {
    return 2;
  }

  return 1; 
}

export default (ref: RefObject<Element>) => {
  const [columns, setColumns] = useState(0);

  const windowSizeChangeListener = useCallback(
    debounce(100)(() => {
      if (!ref.current) {
        return;
      }

      const refWidth = ref.current.getBoundingClientRect().width;
      const newColumns = getColumnsAmount(refWidth);
      if (newColumns !== columns) {
        setColumns(newColumns);
      }
    }),
    [ref]
  );

  useEffect(() => {
    windowSizeChangeListener();

    window.addEventListener('resize', windowSizeChangeListener);

    return () => window.removeEventListener('resize', windowSizeChangeListener);

  }, []);

  return columns;
}