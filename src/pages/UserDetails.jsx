// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const UserDetails = () => {
//     const [userData, setuserData] = useState([]);
// const [loading, setloading] = useState(true);
//     const { id } = useParams();
//     useEffect( () => {
  
//         axios.get(`https://randomuser.me/api/?results=100/?id=${id}`).then((response) => {
//             setuserData(response.data.results);
// setloading(false);
//         }
//         ).catch(err => console.log(err))
// console.log(userData);
// console.log(loading);
// }, [])
//     return ( <div>
//     <h1>Hi,
// {userData.name}

//         </h1>
//              <h1>Hi,
//              {userData.name}
             
//                      </h1>
//                           <h1>Hi,
//                           {userData.name}
                          
//                                   </h1>
//     </div>
    

//      );
// }
 
// export default UserDetails;