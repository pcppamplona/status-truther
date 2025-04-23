import { api } from "./api";

export const StatusService = {
    getOverview: () => api.get("/api/v1/status/overview"),
    getAll: () => api.get("/api/v1/status"),
    getById: (id: number) => api.get(`/api/v1/status/${id}`),
    getActiveIncidents: () => api.get("/api/v1/status/incidents/active"),
    getHistory: () => api.get("/api/v1/status/history"),
    getSummary: () => api.get("/api/v1/status/summary"),
    getDependencies: () => api.get("/api/v1/status/dependencies"),
};
