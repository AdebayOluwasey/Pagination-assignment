import React from "react";
import "./Home.css";
import young from  "../img/young.jpg";
import youngw from  "../img/youngw.jpg";
import { Link } from "react-router-dom";

const Home = () => {
    return ( <div className="landingpage-container">
 
        <div className="hero-image">

          
        <nav className="nav-container">
<div className="Logo-heading">
    <h2>
        My Logo
    </h2>
</div>
        </nav>
            <div className="hero-overlay">
            <div className="users-button">
                <Link to="/users">
                <button>View Users</button>
                </Link>
               
            </div>
            </div>
        </div>
        <div className="users-list">

        </div>
    </div>
     
     );
}
 
export default Home;