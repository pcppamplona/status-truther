import { api } from "../services/api";
import { useQuery } from "react-query";

export interface Service {
  id: number;
  name: string;
}

export const useServices = () => {
  return useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: async () => {
      const { data } = await api.get("/services");
      return data;
    },
  });
};
