"use client";

import Sidebar from "../components/sidebar/Sidebar";
import AssessmentBlock from "../components/hub/AssessmentBlock";
import IntakeBlock from "../components/hub/IntakeBlock";
import ContextFeed from "../components/hub/ContextFeed";
import SummationPreview from "../components/hub/SummationPreview";

export default function Home() {
  return (
    <div className="shell">
      <main className="main">
        <AssessmentBlock />
        <IntakeBlock />
        <ContextFeed />
        <SummationPreview />
      </main>
      <Sidebar />
    </div>
  );
}