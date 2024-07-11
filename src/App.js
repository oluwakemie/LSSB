import React from "react";
import Login from "./login";
import SignUp from "./SignUp";
import Home from "./Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />{" "}
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/login" element={<Login />}>
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
