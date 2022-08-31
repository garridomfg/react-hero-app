import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth/pages";
import { HeroresRoutes } from "../heroes/routes/HeroresRoutes";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />

        <Route path="/*" element={<HeroresRoutes />} />
      </Routes>
    </>
  );
};

export default AppRouter;
