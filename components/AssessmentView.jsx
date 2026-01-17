"use client";

import { useEffect, useMemo, useState } from "react";
import { ICONS } from "../lib/assets";

const MOODS = [
  "Horny for Peace",
  "Feral & Focused",
  "Violently Calm",
  "Sexually Frustrated but Contained",
  "Plotting With a Semi",
  "Muscle Memory and Trauma",
  "Built Like a Threat",
  "Calm Like a Loaded Weapon",
  "Hard Body, Closed Heart",
  "Wanting Touch, Refusing Attachment",
  "Desire Without Permission",
  "Attracted but Unavailable",
  "Crushing Quietly",
  "Sexually Awake, Emotionally Armed",
  "Detached for My Own Safety",
  "Heart Locked, Body Open",
  "Missing Someone I Shouldn’t",
  "Grief With Good Posture",
  "Sad, Not Weak",
  "Petty but Correct",
  "Annoyed by Everyone",
  "Do Not Test Me",
  "Observing Before Engaging",
  "Silence Is Strategic",
  "Hyperfocused and Unreachable",
  "Overstimulated but Managing",
  "Brain on Fire",
  "Mask On, Emotions Offline",
  "Unmasked and Exposed",
  "Indifferent and Relieved",
  "Regulated Enough",
  "Resting in My Body",
  "Safe for Now",
  "Still Standing",
];

const ERAS = [
  "Villain Era",
  "Whore4More",
  "Horny for Peace",
  "Muscle Memory and Trauma",
  "Plotting Season",
  "Built, Not Broken",
  "Hard Body, Harder Boundaries",
  "Flesh and Willpower",
  "Dangerous Crush Season",
  "Attachment Without Illusions",
  "Wanting Without Chasing",
  "Letting Someone Matter (Carefully)",
  "Post-Heartbreak Control Phase",
  "Emotional Scar Tissue",
  "Grief Without Collapse",
  "Detachment Training",
  "Gym God Ascension",
  "Strength Without Apology",
  "Discipline Over Desire",
  "Power Stabilization",
  "Hyperfocus Arc",
  "Manic Clarity Window",
  "Burnout Containment",
  "Re-Regulation Protocol",
  "Silence as Strategy",
  "No Negotiation Period",
  "Energy Preservation Mode",
  "Nothing to Prove",
  "Knowing Exactly Who I Am",
];

const SINGLES = [
  "Single and Self-Controlled",
  "Single, Not Looking",
  "Single but Curious",
  "Crushing Quietly",
  "Mutual Tension, No Labels",
  "Attracted but Guarded",
  "Emotionally Involved",
  "Physically Attached, Emotionally Cautious",
  "Letting Someone In (Slowly)",
  "Complicated on Purpose",
  "Unavailable by Design",
  "Attached Against My Will",
  "Heart Closed for Maintenance",
  "Recovering From Someone",
  "Detaching With Intent",
  "Indifferent and Relieved",
  "Choosing Myself",
];

function fmtCSTParts(d = new Date()) {
  const tz = "America/Chicago";
  const day = new Intl.DateTimeFormat("en-US", { timeZone: tz, weekday: "long" })
    .format(d)
    .toUpperCase();

  const month = new Intl.DateTimeFormat("en-US", { timeZone: tz, month: "short" })
    .format(d)
    .toUpperCase();

  const dd = new Intl.DateTimeFormat("en-US", { timeZone: tz, day: "numeric" }).format(d);

  const yyyy = new Intl.DateTimeFormat("en-US", { timeZone: tz, year: "numeric" }).format(d);

  const time = new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    hour: "numeric",
    minute: "2-digit",
  })
    .format(d)
    .toUpperCase();

  return {
    day,
    date: `${month} ${dd}, ${yyyy}`,
    time,
  };
}

export default function AssessmentView() {
  const [clock, setClock] = useState(() => fmtCSTParts());

  useEffect(() => {
    const t = setInterval(() => setClock(fmtCSTParts()), 30_000);
    return () => clearInterval(t);
  }, []);

  const optionsMood = useMemo(() => MOODS, []);
  const optionsEra = useMemo(() => ERAS, []);
  const optionsSingle = useMemo(() => SINGLES, []);

  return (
    <div className="appShell">
      {/* TOP BAR: Eye (left) / TELL NO LIES (center) / date chips (right) */}
      <header className="topbar">
        <div className="brandPlate">
          <img className="topEye" src={ICONS.eye} alt="" aria-hidden="true" />
        </div>

        <div className="brandCenter">
          <div className="brandTitle">TELL NO LIES</div>
        </div>

        <div className="dateChips">
          <div className="chip">{clock.day}</div>
          <div className="chip">{clock.date}</div>
          <div className="chip">{clock.time}</div>
        </div>
      </header>

      <div className="container">
        <section className="card">
          <div className="view">
            <div className="zone">
              <div className="zoneHead">
                <div className="zoneTitle">THE ASSESSMENT</div>

                {/* tool buttons (visual-only; no new behaviors invented) */}
                <div className="floatTools" aria-hidden="true">
                  <button className="glyphBtn" type="button" tabIndex={-1} />
                  <button className="glyphBtn" type="button" tabIndex={-1} />
                  <button className="glyphBtn" type="button" tabIndex={-1} />
                  <button className="glyphBtn" type="button" tabIndex={-1} />
                </div>
              </div>

              {/* TITLE */}
              <div className="titleRow">
                <input className="titleInput" id="entryTitle" placeholder="TITLE" />
              </div>

              {/* GRID (matches what you had: Location / Intent, Mood / Word, Era / Singleness) */}
              <div className="grid2" style={{ paddingTop: 10 }}>
                <div className="field">
                  <label htmlFor="entryLocation">LOCATION</label>
                  <input id="entryLocation" placeholder="—" />
                </div>

                <div className="field">
                  <label htmlFor="entryIntent">INTENT / FOCUS</label>
                  <input id="entryIntent" placeholder="—" />
                </div>

                <div className="field">
                  <label htmlFor="entryMood">MOOD</label>
                  <select id="entryMood" defaultValue="">
                    <option value="">SELECT…</option>
                    {optionsMood.map((t) => (
                      <option key={t} value={t}>
                        {t.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="entryWord">WORD OF THE DAY</label>
                  <input id="entryWord" placeholder="—" />
                </div>

                <div className="field">
                  <label htmlFor="entryEra">ERA</label>
                  <select id="entryEra" defaultValue="">
                    <option value="">(OPTIONAL)</option>
                    {optionsEra.map((t) => (
                      <option key={t} value={t}>
                        {t.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="entrySingle">SINGLENESS LEVEL</label>
                  <select id="entrySingle" defaultValue="">
                    <option value="">SELECT…</option>
                    {optionsSingle.map((t) => (
                      <option key={t} value={t}>
                        {t.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
