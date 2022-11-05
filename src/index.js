import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import App from "./App";
import { SearchContextProvider } from "./context/SearchContext";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <Router>
      <AuthContextProvider>
         <SearchContextProvider>
            <App />
         </SearchContextProvider>
      </AuthContextProvider>
   </Router>
);
