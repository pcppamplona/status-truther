type IncidentSeverity = "critical" | "warning" | "info";

export interface StatusIncident {
    id: number;
    service_id: number;
    service_name: string;
    alert_id: number;
    alert_name: string;
    severity: IncidentSeverity;
    started_at: string;
    duration: string;
    duration_sec: number;
    status: string;
    notified: boolean;
    acknowledged: boolean;
}
