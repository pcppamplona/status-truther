import { Route, Routes } from "react-router";
import Dashboard from "../app/Dashboard";

export default function RoutesApp() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}

    </Routes>
  );
}
