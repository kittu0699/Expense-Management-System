import React from 'react';

import {BrowserRouter as Router, Routes, Route, Navigate,} from "react-router-dom";

import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";
import UserProvider from './context/userContext';
import { Toaster } from "react-hot-toast";


const App = () => {
  return (
    <UserProvider>
    <div>
       <Router>
        <Routes>
          <Route path='/' element={<Root />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/dashboard' element={<Home />} />
          <Route path='/income' element={<Income />} />
          <Route path='/expense' element={<Expense />} />
          {/* <Route path='/logout' element={<Login />} />  */}
        </Routes>
      </Router>
    </div>

    <Toaster
         toastOptions={{
         className: "",
         style: {
           fontSize: "13px"
         },
         }}
         />
    </UserProvider>
  );
};

export default App;


const Root = () => {
  //Check if token exists in localStorage
  const isAuthenticate = !!localStorage.getItem("token");

  //Redirect to dashboard if authenticated, otherwise to login
  return isAuthenticate ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};