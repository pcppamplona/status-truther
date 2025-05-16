import { useState } from "react";
import IncidentHistory from "./IncidentHistory";
import UptimeSection from "./UptimeSection";
import { components } from "../../../../utils/mock";

export default function DetailView({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<"incidents" | "uptime">(
    "incidents"
  );

  return (
    <div className="flex flex-col mt-8">
      <div className="flex my-10">
        <div
          onClick={() => setActiveTab("incidents")}
          className={`w-28 flex items-center justify-center p-4 text-sm cursor-pointer bg-[var(--bgPrimaryColor)] 
      ${
        activeTab === "incidents"
          ? "text-[var(--paragraphColor)] font-semibold border-[var(--borderColor)] border-x border-t rounded-t-lg"
          : "text-[var(--mutedColor)] border-b border-[var(--borderColor)]"
      }`}
        >
          Incidents
        </div>

        <div
          onClick={() => setActiveTab("uptime")}
          className={`w-28 flex items-center justify-center p-4 text-sm cursor-pointer bg-[var(--bgPrimaryColor)] 
      ${
        activeTab === "uptime"
          ? "text-[var(--paragraphColor)] font-semibold border-[var(--borderColor)] border-x border-t rounded-t-lg"
          : "text-[var(--mutedColor)] border-b border-[var(--borderColor)]"
      }`}
        >
          Uptime
        </div>

        <div className="w-full border-b border-[var(--borderColor)]" />
      </div>

      {activeTab === "incidents" && <IncidentHistory />}
      {activeTab === "uptime" && <UptimeSection components={components} />}

      <div
        className="bg-[var(--bgSecondaryColor)] max-w-36 h-10 w-full sm:w-auto flex items-center justify-center rounded-lg px-4 cursor-pointer mt-16"
        onClick={onBack}
      >
        <span className="text-[var(--primaryColor)] font-semibold text-xs">
          ← Current Status
        </span>
      </div>
    </div>
  );
}
