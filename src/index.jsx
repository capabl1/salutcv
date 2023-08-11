import React from "react";
import ReactDOMClient from "react-dom/client";
import { Svp } from "./screens/Svp";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Svp />);
