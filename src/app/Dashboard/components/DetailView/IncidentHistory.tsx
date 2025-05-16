import { formatDate, formatTime } from "../../../../utils/formaters";
import { useStatusIncidents } from "../../../../hooks/useStatusIncidents";

const statusColorMap: Record<string, string> = {
  resolved: "text-green-500",
  monitoring: "text-yellow-500",
  identified: "text-orange-500",
  investigating: "text-red-500",
  in_progress: "text-yellow-500",
  scheduled: "text-yellow-500",
};

export default function IncidentHistory() {
  const { data, isLoading } = useStatusIncidents();

  if (isLoading) {
    return (
      <p className="p-6 text-sm text-gray-500">Carregando incidentes...</p>
    );
  }

  if (!data || data.length === 0) {
    return (
      <p className="p-6 text-sm text-gray-500">Nenhum incidente registrado.</p>
    );
  }

  const incidentsByDate = data.reduce<Record<string, typeof data>>(
    (acc, incident) => {
      const dateKey = formatDate(incident.started_at);
      if (!acc[dateKey]) acc[dateKey] = [];
      acc[dateKey].push(incident);
      return acc;
    },
    {}
  );

  const sortedDates = Object.keys(incidentsByDate).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold text-[var(--paragraphColor)] mb-6 pb-2">
        Past Incidents
      </h2>

      {sortedDates.map((date, idx) => (
        <div key={idx} className="mb-6">
          <p className="text-xl font-semibold text-[var(--titleColor)] border-b border-[var(--borderColor)] pb-4 mb-2">
            {new Date(date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>

          {incidentsByDate[date].map((incident) => (
            <div key={incident.id} className="my-6">
              <p
                className={`text-xl font-semibold ${
                  statusColorMap[incident.status] ?? "text-gray-400"
                }`}
              >
                {incident.alert_name}
              </p>
              <p className="text-xl text-gray-400">
                {incident.status.charAt(0).toUpperCase() +
                  incident.status.slice(1)}{" "}
                – {formatTime(incident.started_at)}
              </p>
              <p className="text-xl text-gray-300">
                Gravidade: {incident.severity}, Duração: {incident.duration}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
