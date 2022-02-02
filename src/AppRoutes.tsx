import { Routes, Route } from "react-router-dom";
import SignUpPage from "./app/pages/auth/SignUpPage";
import UnLoggedHomePage from "./app/pages/UnLoggedHomePage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UnLoggedHomePage />} />
        <Route path="/register" element={<SignUpPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
