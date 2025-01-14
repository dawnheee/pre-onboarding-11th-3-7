import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LoadingProvider } from "./context/LoadingContext";
import { OwnerRepoProvider } from "./context/OwnerRepoContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <LoadingProvider>
    <OwnerRepoProvider>
      <App />
    </OwnerRepoProvider>
  </LoadingProvider>
);
