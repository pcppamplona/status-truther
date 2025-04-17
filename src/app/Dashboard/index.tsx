import { useTheme } from "../../context/ThemeProvider";
import { FaRegMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";

import {StatusCard} from "../../components/StatusCard.tsx";

export default function Dashboard() {
  const { mode, toggleMode } = useTheme();

  const components = [
    {
      name: "Hosted Pages",
      status: "Operational",
      uptime: "100.0%",
      bars: 90,
    },
    {
      name: "Management",
      status: "Warning",
      uptime: "99.99%",
      bars: 90,
    },
    {
      name: "Notifications",
      status: "Error",
      uptime: "100.0%",
      bars: 90,
    },
    {
      name: "Third Party Components",
      status: "Operational",
      uptime: "100.0%",
      bars: 90,
    },
  ];

  return (
    <div className="min-h-screen w-screen bg-[var(--bgSecondaryColor)] text-[var(--titleColor)]">
      <div className="bg-[var(--bgPrimaryColor)] text-[var(--titleColor)] px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <img
            src="/iconTruther.png"
            alt="Logo"
            className="h-10 w-10 object-contain"
          />
          <text className="text-4xl font-semibold text-[#2BE095]">
            truther Status
          </text>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-2 sm:gap-0">
          <div
            className="bg-transparent h-12 flex items-center justify-center p-4 rounded-xl"
            onClick={() => {}}
          >
            <text className="">Relatar problema</text>
          </div>
          <div
            className="bg-transparent h-12 flex items-center justify-center p-4 border-[2px] border-[#2BE095] rounded-xl"
            onClick={() => {}}
          >
            <text className="text-[#2BE095] font-medium">Assinar atualizações</text>
          </div>

          <div
            className="bg-transparent h-12 flex items-center justify-center p-4"
            onClick={toggleMode}
          >
            {mode == "dark" ? <FaRegMoon size={24}/> : <LuSun size={24} color="#000"/>}
          </div>
        </div>
      </div>

      <div className="p-6 justify-items-center">
        <div className="bg-green-500 text-white px-4 py-3 rounded mb-6">
          <strong>All Systems Operational</strong>
        </div>

        <p className="text-sm text-gray-500 mb-4">
          Tempo de atividade nos últimos 90 dias.{" "}
          <a href="#" className="text-blue-600 underline">
            Veja o histórico de tempo de atividade.
          </a>
        </p>

        <div className="space-y-6">
          {components.map((component, index) => (
            <StatusCard
              key={index}
              name={component.name}
              status={component.status}
              uptime={component.uptime}
              bars={component.bars}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
