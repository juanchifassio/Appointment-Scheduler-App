import { Routes, Route } from "react-router-dom";
import SignUpPage from "./app/pages/auth/SignUpPage";
import UnLoggedHomePage from "./app/pages/UnLoggedHomePage";
import ProfilePage from "./app/pages/user/ProfilePage";
import UpdateSchedulePage from "./app/pages/user/UpdateSchedulePage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/profile/update-schedule"
          element={<UpdateSchedulePage />}
        />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/" element={<UnLoggedHomePage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
