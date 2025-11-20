import React from "react";
import { useEffect, useState } from "react";

export default function useViewportHeight() {
  const [vh, setVh] = useState(window.innerHeight * 0.01);

  useEffect(() => {
    const updateVh = () => {
      setVh(window.innerHeight * 0.01);
      document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    };

    updateVh();
    window.addEventListener("resize", updateVh);

    return () => window.removeEventListener("resize", updateVh);
  }, []);

  return vh;
}
