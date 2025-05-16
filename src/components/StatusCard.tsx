import { useState } from "react";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { SubCard } from "./SubCard";

export interface ComponentData {
  name: string;
  status?: "Operational" | "Warning" | "Error";
  uptime?: string;
  bars?: Array<Number> | number[];
  children?: ComponentData[];
}

export interface StatusCardProps {
  component: ComponentData;
}

export const getStatusColor = (status: string) => {
  switch (status) {
    case "Operational":
      return "text-green-500";
    case "Warning":
      return "text-yellow-400";
    case "Error":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
};
export function StatusCard({ component }: StatusCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = component.children && component.children.length > 0;

  return (
    <div className="flex-1 flex-col w-full border-b border-[var(--borderColor)] p-8">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          {hasChildren && (
            <>
              {isExpanded ? (
                <CiSquareMinus
                  size={22}
                  onClick={() => setIsExpanded(!isExpanded)}
                />
              ) : (
                <CiSquarePlus
                  size={22}
                  onClick={() => setIsExpanded(!isExpanded)}
                />
              )}
            </>
          )}
          <span className="font-semibold text-[var(--paragraphColor)]">{component.name}</span>
        </div>
        <span
          className={`text-sm font-medium ${getStatusColor(component.status ?? "")}`}
        >
          {component.status}
        </span>
      </div>

      <div className="mb-2 flex flex-wrap gap-[4px] justify-evenly">
        {component.bars?.map((_i, index) => (
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

      {hasChildren && isExpanded && (
        <div className="mt-10 border-l border-[var(--borderColor)] space-y-10">
          {component.children!.map((child, idx) => (
            <div key={idx} className="">
              <SubCard component={child} />
            </div>
          ))}
        </div>
      )}
      {!hasChildren && (

        <div className="text-sm text-[var(--mutedColor)] flex justify-between">
        <span>60 days ago</span>
        <span>{component.uptime} uptime</span>
        <span>Today</span>
      </div>
      )}
    </div>
  );
}
