import React, { ReactNode } from "react";
import useScrollReveal from "./useScrollReveal";

interface ScrollRevealProps {
  children: ReactNode;
}

function ScrollReveal({ children }: ScrollRevealProps) {
  const { ref, classes } = useScrollReveal();
  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}

export default ScrollReveal;
