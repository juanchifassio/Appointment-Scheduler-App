import { Routes, Route } from "react-router-dom";
import SignUpPage from "./app/pages/auth/SignUpPage";
import UnLoggedHomePage from "./app/pages/UnLoggedHomePage";
import LoggedHomePage from "./app/pages/user/LoggedHomePage";
import UpdateSchedulePage from "./app/pages/user/UpdateSchedulePage";
import { useAuth } from "./app/components/contexts/AuthContext";
import ClientAppointmentPage from "./app/pages/client/ClientAppointmentPage";
import AppointmentConfirmPage from "./app/pages/client/AppointmentConfirmPage";

const AppRoutes = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <Routes>
        <Route path="/:id/confirm" element={<AppointmentConfirmPage />} />
        <Route path="/:id" element={<ClientAppointmentPage />} />
        <Route path="/schedule-update" element={<UpdateSchedulePage />} />
        <Route path="/register" element={<SignUpPage />} />
        {currentUser ? (
          <Route path="/" element={<LoggedHomePage />} />
        ) : (
          <Route path="/" element={<UnLoggedHomePage />} />
        )}
      </Routes>
    </>
  );
};

export default AppRoutes;
