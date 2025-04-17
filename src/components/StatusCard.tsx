interface StatusCardProps {
    name: string;
    status: string;
    uptime: string;
    bars: number;
}

function getStatusColor(status: string): string {
    switch (status) {
        case "Operational":
            return "bg-green-500";
        case "Warning":
            return "bg-yellow-500";
        case "Error":
        case "Offline":
            return "bg-red-500";
        default:
            return "bg-gray-400"; // fallback
    }
}

export function StatusCard({ name, status, uptime, bars }: StatusCardProps) {
    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-md font-medium">{name}</h2>
            </div>
            <div className="flex items-center space-x-1 mb-1">
                {Array.from({ length: bars }).map((_, i) => (
                    <div
                        key={i}
                        className={`h-4 w-1 rounded ${getStatusColor(status)}`}
                        title={`Day ${i + 1}`}
                    />
                ))}
            </div>
            <p className="text-xs text-gray-500">{uptime} uptime</p>
        </div>
    );
}
