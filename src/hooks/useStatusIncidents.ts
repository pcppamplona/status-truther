import { api } from "@/services/api";
import { useQuery } from "react-query";

export interface StatusIncident {
  id: number;
  service_id: number;
  alert_name: string;
  severity: string;
  started_at: string;
  duration: string;
  duration_sec: number;
  status: string;
  notified: boolean;
  acknowledged: boolean;
}

export const useStatusIncidents = () => {
  return useQuery<StatusIncident[]>({
    queryKey: ["status_incidents"],
    queryFn: async () => {
      const { data } = await api.get("/status_incidents");
      return data;
    },
  });
};
