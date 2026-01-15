"use client";

import { useState } from "react";

export default function OpeningBook({ onDone }) {
  const [opening, setOpening] = useState(false);

  function open() {
    if (opening) return;
    setOpening(true);
    setTimeout(() => onDone?.(), 900);
  }

  return (
    <div className="openingRoot">
      <div className={`bookWrap ${opening ? "isOpen" : ""}`}>
        <img
          className="bookClosed"
          src="/assets/covers/cover-closed.png"
          alt="Closed cover"
          draggable="false"
        />
        <img
          className="bookOpen"
          src="/assets/covers/cover-stand-open.png"
          alt="Open cover"
          draggable="false"
        />
      </div>

      <button className="sigilBtn" onClick={open} aria-label="Open sigil">
        <span className="sigilRune" aria-hidden="true" />
        <span className="sigilText">{opening ? "WEAVING…" : "OPEN"}</span>
      </button>
    </div>
  );
}
