import { ComponentData } from "../../../../components/StatusCard";

interface Props {
  components: ComponentData[];
}

interface UptimeMonthProps {
  month: string;
  bars: number[];
  uptime: string;
}

const UptimeMonth = ({ month, bars, uptime }: UptimeMonthProps) => {
  return (
    <div className="flex flex-col items-center mx-4">
      <div className="flex justify-between w-full mb-2 text-sm">
        <span className="text-white font-semibold">{month}</span>
        <span className="text-white">{uptime}</span>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {bars.map((value, i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded ${
              value === 1 ? "bg-green-400" : "bg-zinc-800"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function UptimeSection({ components }: Props) {
  return (
    <div className="flex flex-wrap gap-4">
      {components.map((comp, index) => (
        <div
          key={index}
          className="flex-grow basis-[calc(33.333%-1rem)] max-w-[calc(33.333%-1rem)] min-w-[200px]"
        >
          <UptimeMonth
            month={new Date(2025, index, 1).toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
            bars={comp.bars ?? []}
            uptime={comp.uptime ?? "N/A"}
          />
        </div>
      ))}
    </div>
  );
}
