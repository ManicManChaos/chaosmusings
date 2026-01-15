"use client";

export default function Sidebar({ active, onSelect }) {
  return (
    <>
      <aside className="sidebar">
        <div className="sbTop">
          <div className="sbBrand">CHAOSMUSINGS</div>
        </div>

        <nav className="sbNav">
          <GlyphBtn id="eye" label="All-Seeing Eye" active={active} onSelect={onSelect} />
          <GlyphBtn id="moments" label="The Context" active={active} onSelect={onSelect} />
          <GlyphBtn id="roid" label="Roid Boy" active={active} onSelect={onSelect} />
          <GlyphBtn id="ps" label="P.S." active={active} onSelect={onSelect} />
          <GlyphBtn id="summation" label="The Summation" active={active} onSelect={onSelect} />
          <div className="sbDivider" />
          <GlyphBtn id="library" label="Library" active={active} onSelect={onSelect} />
          <GlyphBtn id="directory" label="Directory" active={active} onSelect={onSelect} />
          <GlyphBtn id="year" label="Year in Review" active={active} onSelect={onSelect} />
        </nav>
      </aside>

      {/* Mobile toggle */}
      <button
        className="sbFab"
        onClick={() => {
          document.body.classList.toggle("sbOpen");
        }}
        aria-label="Toggle sidebar"
      >
        ☰
      </button>
    </>
  );
}

function GlyphBtn({ id, label, active, onSelect }) {
  return (
    <button
      className={`sbBtn ${active === id ? "isActive" : ""}`}
      onClick={() => {
        document.body.classList.remove("sbOpen");
        onSelect(id);
      }}
    >
      <span className="rune" aria-hidden="true" />
      <span className="sbLbl">{label}</span>
    </button>
  );
}
