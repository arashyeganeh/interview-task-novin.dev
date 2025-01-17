import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContext from "./context/mainContext";

import { ProtectLayout, PublicLayout } from "./Layouts";
import { DashboardPage, LoginPage, LogoutPage, NotFoundPage, UserPage } from "./pages";

import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainContext>
        <Routes>
          <Route path="/" element={<ProtectLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="user/:userId" element={<UserPage />} />
            <Route path="logout" element={<LogoutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="/login" element={<PublicLayout />}>
            <Route index element={<LoginPage />} />
          </Route>
        </Routes>
      </MainContext>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
