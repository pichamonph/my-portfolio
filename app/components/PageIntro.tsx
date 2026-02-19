"use client";

import { useState, useEffect } from "react";

export default function PageIntro() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2600);
    return () => clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    <div className="page-intro">
      <div className="page-intro-monogram">
        <span className="page-intro-firstname">Pichamon</span>
        <span className="page-intro-lastname">Phongsethasant</span>
        <div className="page-intro-divider" />
        <span className="page-intro-label">PORTFOLIO</span>
      </div>
    </div>
  );
}
