import { useAuth } from "./app/components/contexts/AuthContext";
import Footer from "./app/components/footer/footer";
import Navbar from "./app/components/header/Navbar";
import AppRoutes from "./AppRoutes";

function App() {
  const { currentUser } = useAuth();
  return (
    <>
      {currentUser ? <Navbar /> : null}
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
