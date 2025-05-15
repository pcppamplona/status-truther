import { api } from "@/services/api";
import { useQuery } from "react-query";


export interface StatusSummary {
  id: number;
  uptime_percentage: number;
  average_response_time: number;
  monitored_services: number;
  incidents_last_24h: number;
  critical_incidents: number;
  warning_incidents: number;
  maintenance_windows: number;
  last_updated: string;
}

export const useStatusSummary = () => {
  return useQuery<StatusSummary[]>({
    queryKey: ["status_summary"],
    queryFn: async () => {
      const { data } = await api.get("/status_summary");
      return data;
    },
  });
};
