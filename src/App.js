import React from "react";
import Login from "./login";
import SignUp from "./SignUp";
import EmailVerification from "./EmailVerification";
import AccountScreening from "./AccountScreening";
import ResetPassword from "./ResetPassword";
import PasswordSetup from "./PasswordSetup";


import Home from "./Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />{" "}
        <Route path="/SignUp" element={<SignUp />} />
         <Route path="/accountscreening" element={<AccountScreening />} />
         <Route path="/passwordsetup" element={<PasswordSetup />}/> 
        
         <Route path="/resetpassword" element={<ResetPassword />}/> 
         <Route path="/emailverification" element={<EmailVerification />}/> 
         

             <Route path="/login" element={<Login />}>

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
