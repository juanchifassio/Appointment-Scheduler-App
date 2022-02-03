import Footer from "./app/components/footer/footer";
import Navbar from "./app/components/header/Navbar";
import AppRoutes from "./AppRoutes";
import { AuthContextProvider } from "./app/components/contexts/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <AppRoutes />
        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;
