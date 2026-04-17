import { useEffect, useState } from "react";

/**
 * Returns current breakpoint: "mobile" | "tablet" | "desktop"
 * mobile  → < 640px
 * tablet  → 640px – 1023px
 * desktop → ≥ 1024px
 */
export function useScreenSize() {
  const [size, setSize] = useState("desktop");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) setSize("mobile");
      else if (window.innerWidth < 1024) setSize("tablet");
      else setSize("desktop");
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}