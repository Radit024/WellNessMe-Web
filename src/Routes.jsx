import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SignUp = React.lazy(() => import("pages/SignUp"));
const SignIn = React.lazy(() => import("pages/SignIn"));
const Mainhome = React.lazy(() => import("pages/Mainhome"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/mainhome" element={<Mainhome />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
