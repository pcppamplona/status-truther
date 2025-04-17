import {StatusCard} from "../../components/StatusCard.tsx";

export default function Dashboard() {

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
    <div className="min-h-screen w-screen bg-[#272727] text-white">
      <div className="bg-[#2C2C2C] text-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center justify-center gap-3">
          <img
            src="/iconTruther.png"
            alt="Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-4xl font-semibold">Truther Status</span>
        </div>
        <div className="space-x-4">
          <button className="bg-[#272727]">Assinar atualizações</button>
          <button className="">Reportar problema</button>
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
