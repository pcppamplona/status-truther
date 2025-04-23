import { useEffect, useState } from "react";
import { StatusService } from "@/services/statusService";
import {StatusOverviewData} from "@/types/status.ts";

export function useStatusOverview() {
    const [data, setData] = useState<StatusOverviewData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        StatusService.getOverview()
            .then((res) => setData(res.data.data))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return { data, loading, error };
}