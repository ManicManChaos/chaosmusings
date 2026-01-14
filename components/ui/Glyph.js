export default function Glyph({ name, label }) {
  return (
    <button className="runeBtn" type="button" aria-label={label}>
      <img className="rune" src={`/icons/${name}.svg`} alt="" />
    </button>
  );
}
