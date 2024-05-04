
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));

if( process.env.NODE_ENV != 'development') {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  root.render(
      <App />
  );
}

console.log(process.env.REACT_APP_NEWS_API_KEY);


