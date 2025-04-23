import { useEffect, useState } from "react";
import { StatusService } from "@/services/statusService";
import {StatusOverview} from "@/types/statusOverview.ts";
import {AxiosResponse} from "axios";
import {ApiResponse} from "@/types/api.ts";

export function useStatusOverview() {
    const [data, setData] = useState<StatusOverview | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        StatusService.getOverview()
            .then((res: AxiosResponse<ApiResponse<StatusOverview>>) => setData(res.data.data))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return { data, loading, error };
}