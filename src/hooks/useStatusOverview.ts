import { useEffect, useState } from "react";
import { StatusService } from "@/services/statusService";
import {StatusOverviewResponse} from "@/types/statusOverview.ts";

export function useStatusOverview() {
    const [data, setData] = useState<StatusOverviewResponse | null>(null);
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