import React from "react";
import image from '../img/404image.jpg';
import "./Page404.css"
const Page404 = () => {
    return ( <>
    <div className="image"><div className="h1div">
    <h1>
            Oops!! 404 error... Page not found</h1>
    </div>
       
        <div className="image-div">
        <img src={image} alt="" />
            </div>    </div></> );
}
 
export default Page404;