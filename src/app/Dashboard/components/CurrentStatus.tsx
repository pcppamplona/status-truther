import { ComponentData, StatusCard } from "../../../components/StatusCard";

interface Props {
  components: ComponentData[];
  onNavigateDetails: () => void;
}

export default function CurrentStatus({
  components,
  onNavigateDetails,
}: Props) {
  return (
    <div className="flex flex-col mt-8">
      <div className="bg-[var(--primaryColor)] text-[var(--bgPrimaryColor)] px-6 py-3 rounded mb-6">
        <strong>All Systems Operational</strong>
      </div>

      <div className="flex items-center justify-end mb-4 gap-2">
        <p className="text-sm text-[var(--paragraphColor)]">
          Uptime over the past 60 days.{" "}
        </p>

        <div
          className="bg-[var(--bgSecondaryColor)] h-10 w-full sm:w-auto flex items-center justify-center rounded-lg px-4 cursor-pointer"
          onClick={onNavigateDetails}
        >
          <span className="text-[var(--primaryColor)] font-semibold text-xs">
            View details →
          </span>
        </div>
      </div>
      <div className="flex items-center flex-col border border-[var(--borderColor)] rounded-lg">
        {components.map((component, index) => (
          <StatusCard key={index} component={component} />
        ))}
      </div>
    </div>
  );
}
