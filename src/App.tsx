import React from "react";
import "./App.css";
import { ApplicationContextProvider } from "./context/application-context";
import AppRoutes from "./routes";

function App() {
  return (
    <ApplicationContextProvider>
      <AppRoutes />
    </ApplicationContextProvider>
  );
}

export default App;
