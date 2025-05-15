import { api } from "@/services/api";
import { useQuery } from "react-query";

export interface StatusDependency {
  id: number;
  service_id: number;
  name: string;
  type: string;
  status: string;
  uptime: number;
  response_time: number;
}

export const useStatusDependencies = () => {
  return useQuery<StatusDependency[]>({
    queryKey: ["status_dependencies"],
    queryFn: async () => {
      const { data } = await api.get("/status_dependencies");
      return data;
    },
  });
};
