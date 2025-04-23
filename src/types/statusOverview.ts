interface StatusOverviewCounts {
    total: number;
    up: number;
    down: number;
    maintenance: number;
    critical: number;
    warning: number;
}

export interface StatusOverview {
    status: "green" | "yellow" | "red";
    counts: StatusOverviewCounts;
    updated_at: string;
    active_incidents: number;
}