import { useEffect, useState } from "react";
import { StatusService } from "@/services/statusService";
import { StatusHistory } from "@/types/statusHistory";
import {AxiosResponse} from "axios";
import {ApiResponse} from "@/types/api.ts";

export function useStatusHistory() {
    const [data, setData] = useState<StatusHistory[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        StatusService.getHistory()
            .then((res: AxiosResponse<ApiResponse<StatusHistory[]>>) => setData(res.data.data))
            .catch(setError)
            .finally(() => setLoading(false));
    }, []);

    return { data, loading, error };
}