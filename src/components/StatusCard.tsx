interface StatusCardProps {
    name: string;
    status: string;
    uptime: string;
    bars: number;
}

function getStatusColor(status: string, isBackgroud: boolean): string {
    switch (status) {
        case "Operational":
            return isBackgroud ? "bg-green-500" : "text-green-500";
        case "Warning":
            return isBackgroud ? "bg-yellow-500" : "text-yellow-500";
        case "Error":
        case "Offline":
            return isBackgroud ? "bg-red-500" : "text-red-500";
        default:
            return isBackgroud ? "bg-gray-400" : "text-gray-400";
    }
}

export function StatusCard({ name, status, uptime, bars }: StatusCardProps) {
    return (
        <div className="w-full max-w-xl bg-[var(--bgPrimaryColor)] p-3 rounded-lg border-l-3 border-[var(--primaryColor)] flex-1">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-md font-medium">{name}</h2>
                <h2 className={`text-md font-medium ${getStatusColor(status, false)}`}>
                    {status}
                </h2>
            </div>
            <div className="overflow-x-auto whitespace-nowrap mb-1">
                <div className="flex gap-[2px]">
                    {Array.from({ length: bars }).map((_, i) => (
                        <div
                            key={i}
                            className={`h-4 w-1 rounded ${getStatusColor(status, true)}`}
                            title={`Day ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
            <p className="text-xs text-gray-500">{uptime} uptime</p>
        </div>
    );
}
