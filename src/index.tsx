import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";
import { AuthContextProvider } from "./app/components/contexts/AuthContext";

const theme = extendTheme({
  components: {
    Steps,
  },
});

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ChakraProvider>
  </BrowserRouter>,
  rootElement
);
