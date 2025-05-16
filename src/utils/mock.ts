import { ComponentData } from "../components/StatusCard";

export const components: ComponentData[] = [
    {
      name: "API Gateway",
      status: "Operational",
      bars: Array(60).fill("ok"),
      uptime: "99.99%",
    },
    {
      name: "Pix",
      children: [
        {
          name: "API Pix Key",
          status: "Operational",
          bars: Array(60).fill("ok").concat("warning"),
          uptime: "99.99%",
        },
        {
          name: "API Pix Key",
          status: "Operational",
          bars: Array(60).fill("ok"),
          uptime: "99.99%",
        },
      ],
    },
    {
      name: "Exemplo",
      status: "Warning",
      bars: Array(60).fill("ok"),
      uptime: "91.99%",
    },
    {
      name: "Exemplo",
      status: "Operational",
      bars: Array(60).fill("ok"),
      uptime: "99.99%",
    },
    {
      name: "Exemplo",
      status: "Operational",
      bars: Array(60).fill("ok"),
      uptime: "100%",
    },
  ];