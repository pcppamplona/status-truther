import { api } from "./api";
import {StatusIncident} from "@/types/statusIncidents.ts";
import {ApiResponse} from "@/types/api.ts";
import {StatusHistory} from "@/types/statusHistory.ts";
import {StatusOverview} from "@/types/statusOverview.ts";

export const StatusService = {
    getOverview: () => api.get<ApiResponse<StatusOverview>>("/api/v1/status/overview"),
    getAll: () => api.get("/api/v1/status"),
    getById: (id: number) => api.get(`/api/v1/status/${id}`),
    getActiveIncidents: () => api.get<ApiResponse<StatusIncident[]>>("/api/v1/status/incidents/active"),
    getHistory: () => api.get<ApiResponse<StatusHistory[]>>("/api/v1/status/history"),
    getSummary: () => api.get("/api/v1/status/summary"),
    getDependencies: () => api.get("/api/v1/status/dependencies"),
};
