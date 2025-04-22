import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
//import "./style/custom.scss";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(<App />);
