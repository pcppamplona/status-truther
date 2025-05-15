import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

// export interface Service {
//   id: number;
//   name: string;
// }

// export const useServices = () => {
//   return useQuery<Service[]>({
//     queryKey: ["services"],
//     queryFn: async () => {
//       const { data } = await api.get("/services");
//       return data;
//     },
//   });
// };

export const useServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/services')
      .then(response => setServices(response.data))
      .finally(() => setLoading(false));
  }, []);

  return { services, loading };
};