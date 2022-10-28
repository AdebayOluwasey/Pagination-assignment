import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Users from "./pages/Users";
import Page404 from "./pages/Page404";
import UserDetails from "./pages/UserDetails";


function App() {
  return (
   <>
   <Router >
    <Routes>
   <Route path="/" element={<Home/>}/>
    <Route path="/users" element={<Users/>}>
      <Route path=":details" element={<UserDetails/>}/>
    </Route>
    <Route path="*" element={<Page404/>}/>
    </Routes>
   </Router>
   </>
  );
}

export default App;
