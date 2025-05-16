import Header from "../../components/Header.tsx";
import { useState } from "react";
import CurrentStatus from "./components/CurrentStatus.tsx";
import DetailView from "./components/DetailView/index.tsx";
import { components } from "../../utils/mock.ts";

export default function Dashboard() {
  const [view, setView] = useState<"overview" | "details">("overview");

  return (
    <div className="min-h-screen w-screen bg-[var(--bgPrimaryColor)] text-[var(--titleColor)]">
      <div className="max-w-[852px] mx-auto p-6">
        <Header />

        {view === "overview" && (
          <CurrentStatus
            components={components}
            onNavigateDetails={() => setView("details")}
          />
        )}

        {view === "details" && (
          <DetailView
            onBack={() => setView("overview")}
          />
        )}
      </div>
    </div>
  );
}
