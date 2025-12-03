import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// --- GLOBAL MOBILE HEIGHT FIX ---
function setRealViewportHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Run on load
setRealViewportHeight();

// Run whenever the browser resizes (address bar hides/shows) or rotates
window.addEventListener('resize', setRealViewportHeight);
// --------------------------------

createRoot(document.getElementById("root")!).render(<App />);
