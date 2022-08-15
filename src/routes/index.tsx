import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../containers/home";
import QuizSetup from "../containers/quiz-setup";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="quiz-setup" element={<QuizSetup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
