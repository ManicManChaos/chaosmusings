"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Assessment from "../components/sections/Assessment";
import ContextBlock from "../components/sections/ContextBlock";
import SummationBlock from "../components/sections/SummationBlock";
import Weave from "../components/Weave";

export default function Page() {
  const [weave, setWeave] = useState(false);

  return (
    <main>
      {weave && <Weave />}
      <Sidebar triggerWeave={() => setWeave(true)} />

      <section>
        <Assessment />
        <ContextBlock />
        <SummationBlock />
      </section>
    </main>
  );
}
