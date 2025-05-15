import { useTheme } from "../../context/ThemeProvider";
import { FaRegMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { ComponentData, StatusCard } from "../../components/StatusCard.tsx";

export default function Dashboard() {
  const { mode, toggleMode } = useTheme();

  const components: ComponentData[] = [
    {
      name: "API Gateway",
      status: "Operational",
      bars: Array(60).fill("ok"),
      uptime: "99.99%",
    },
    {
      name: "Pix",
      children: [
        {
          name: "API Pix Key",
          status: "Operational",
          bars: Array(60).fill("ok").concat("warning"),
          uptime: "99.99%",
        },
        {
          name: "API Pix Key",
          status: "Operational",
          bars: Array(60).fill("ok"),
          uptime: "99.99%",
        },
      ],
    },
    {
      name: "Exemplo",
      status: "Warning",
      bars: Array(60).fill("ok"),
      uptime: "91.99%",
    },
    {
      name: "Exemplo",
      status: "Operational",
      bars: Array(60).fill("ok"),
      uptime: "99.99%",
    },
    {
      name: "Exemplo",
      status: "Operational",
      bars: Array(60).fill("ok"),
      uptime: "100%",
    },
  ];

  return (
    <div className="min-h-screen w-screen bg-[var(--bgPrimaryColor)] text-[var(--titleColor)]">
      <div className="max-w-[852px] mx-auto">
        <div className="bg-[var(--bgPrimaryColor)] text-[var(--titleColor)] px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 w-full">
            <div className="flex justify-between items-center w-full sm:w-auto sm:flex-1">
              <img
                src="/Logo.png"
                alt="Logo"
                className="object-contain h-10 w-auto max-w-[150px]"
              />

              <div
                className="p-2 rounded-full bg-[var(--primaryColor)] text-[var(--bgPrimaryColor)] hover:opacity-80 transition sm:ml-4"
                onClick={toggleMode}
              >
                {mode == "dark" ? <FaRegMoon size={18} /> : <LuSun size={18} />}
              </div>
            </div>

            <div className="w-full sm:w-auto">
              <div
                className="bg-[var(--bgSecondaryColor)] h-10 w-full sm:w-auto flex items-center justify-center rounded-lg px-4 cursor-pointer"
                onClick={() => {}}
              >
                <span className="text-[var(--primaryColor)] font-semibold text-xs">
                  SUBSCRIBE TO UPDATES
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-6 mt-8">
          <div className="bg-[var(--primaryColor)] text-[var(--bgPrimaryColor)] px-6 py-3 rounded mb-6">
            <strong>All Systems Operational</strong>
          </div>

          <p className="text-sm text-gray-500 mb-4 self-end">
            Uptime over the past 60 days.{" "}
            <a href="#" className="text-blue-600 underline">
              View historical uptime.
            </a>
          </p>

          <div className="flex items-center flex-col border border-[var(--borderColor)] rounded-lg">
            {components.map((component, index) => (
              <StatusCard key={index} component={component} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
