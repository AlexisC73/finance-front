import React, { useLayoutEffect } from "react";

export default function useOutsideClick({
  callback,
}: {
  callback: () => void;
}) {
  const ref = React.useRef(null);
  useLayoutEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current === null) return;
      const element = ref.current as HTMLElement;
      if (!element.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [ref, callback]);

  return ref;
}
