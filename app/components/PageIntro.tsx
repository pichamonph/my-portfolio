"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function PageIntro() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2600);
    return () => clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    <div className="page-intro">
      {/* Background image */}
      <Image
        src="/images/Pichamon Phongsethasant.png"
        alt=""
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
      />
      {/* Text overlay */}
      <div className="page-intro-monogram">
        <span className="page-intro-firstname">Pichamon</span>
        <span className="page-intro-lastname">Phongsethasant</span>
        <div className="page-intro-divider" />
        <span className="page-intro-label">PORTFOLIO</span>
      </div>
    </div>
  );
}
