import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

// Remove the preload skeleton after React mounts
const removePreloadSkeleton = () => {
  const preload = document.getElementById('preload');
  if (preload) {
    preload.style.opacity = '0';
    setTimeout(() => preload.remove(), 300);
  }
};

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    
      <App />
   
  </HelmetProvider>
);

// Remove skeleton after render
setTimeout(removePreloadSkeleton, 100);