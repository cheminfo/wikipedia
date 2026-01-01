import { useCallback, useRef, useState } from 'react';

export function useResizeObserver() {
  const [size, setSize] = useState<DOMRect>();
  const observerRef = useRef<ResizeObserver>(null);

  const refCallback = useCallback((node: Element | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    if (node) {
      const updateSize = () => {
        const rect = node.getBoundingClientRect();

        setSize(rect);
      };

      updateSize();

      const observer = new ResizeObserver(() => {
        updateSize();
      });

      observer.observe(node);
      observerRef.current = observer;
    }
  }, []);

  return [refCallback, size] as const;
}
