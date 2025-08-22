import { createRoot } from "react-dom/client";
import { Providers } from "../providers";
import { Router } from "../router";

if (import.meta.env.MODE === "development") {
  const { worker } = await import("../../mocks/browser");
  await worker.start();
}

createRoot(document.getElementById("root")!).render(
  <Providers>
    <Router />
  </Providers>,
);
