import React, { useState } from "react";
import Header from "./Header";
import Footer from "./footer";
import AppRoutes from "./AppRoutes";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import UserContext from "./context/UserContext";
import userService from "./services/userService";

function App() {
   const [isLoggedIn, setLogin] = useState(userService.isLoggedIn);
   
   return <UserContext.Provider value={{ isLoggedIn, setLogin }} >
      <AppRoutes />
   </UserContext.Provider>
   
}


export default App;

