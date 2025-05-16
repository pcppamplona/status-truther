import { useQuery } from "react-query";
import { api } from "../services/api";

export interface StatusOverview {
  componentId: number;
  id: number;
  service_id: number;
  status: string;
  counts: {
    total: number;
    up: number;
    down: number;
    maintenance: number;
    critical: number;
    warning: number;
  };
  updated_at: string;
  active_incidents: number;
}

export const useStatusOverview = () => {
  return useQuery<StatusOverview[]>({
    queryKey: ["status_overview"],
    queryFn: async () => {
      const { data } = await api.get("/status_overview");
      return data;
    },
  });
};
