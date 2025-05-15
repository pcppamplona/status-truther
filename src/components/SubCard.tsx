import { getStatusColor, StatusCardProps } from "./StatusCard";

export function SubCard({ component }: StatusCardProps) {
  return (
    <div className="flex-1 flex-col w-full px-6">
      <div className="">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-[var(--paragraphColor)]">
            {component.name}
          </span>

          <span
            className={`text-sm font-medium ${getStatusColor(
              component.status ?? ""
            )}`}
          >
            {component.status}
          </span>
        </div>

        <div className="mb-2 flex flex-wrap gap-[4px]">
          {component.bars?.map((i, index) => (
            <div
              key={index}
              className={`w-[8px] h-10 rounded-sm ${
                component.status === "Error"
                  ? "bg-red-500"
                  : component.status === "Warning"
                  ? "bg-yellow-400"
                  : "bg-green-500"
              }`}
            />
          ))}
        </div>

        <div className="text-sm text-[var(--mutedColor)] flex justify-between">
          <span>60 days ago</span>
          <span>{component.uptime} uptime</span>
          <span>Today</span>
        </div>
      </div>
    </div>
  );
}
