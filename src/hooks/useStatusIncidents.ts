import { useEffect, useState } from "react";
import { StatusService } from "@/services/statusService";
import { StatusIncident } from "@/types/statusIncidents";
import {AxiosResponse} from "axios";
import {ApiResponse} from "@/types/api.ts";

export function useStatusIncidents() {
    const [data, setData] = useState<StatusIncident[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        StatusService.getActiveIncidents()
            .then((res: AxiosResponse<ApiResponse<StatusIncident[]>>) => setData(res.data.data))
            .catch(setError)
            .finally(() => setLoading(false));
    }, []);

    return { data, loading, error };
}