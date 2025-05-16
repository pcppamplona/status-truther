import { api } from "../services/api";
import { useQuery } from "react-query";

export interface StatusHistory {
  id: number;
  service_id: number;
  time: string;
  uptime: number;
  response_time: number;
}

export const useStatusHistory = () => {
  return useQuery<StatusHistory[]>({
    queryKey: ["status_history"],
    queryFn: async () => {
      const { data } = await api.get("/status_history");
      return data;
    },
  });
};
