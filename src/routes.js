import React from "react";
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Home from './containers/Home'
import Orders from "./containers/Orders";

function AppRoutes (){
    
    return(
        <Router>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/orders" Component={Orders}/>  
            </Routes>
            
        </Router>
    )
}

export default AppRoutes














