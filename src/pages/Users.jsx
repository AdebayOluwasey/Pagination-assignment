import React, { useEffect, useState } from "react";
import './Users.css';
import axios from "axios";
import UserList from "./UserList";
import Pagination from "./Pagination";

const Users = () => {
const [userData, setuserData] = useState([]);
// for current page
const [currentPage, setCurrentPage] = useState(1);
// for viewing usersPerPage
const [usersPerPage, setusersPerPage] = useState(10);
const [loading, setloading] = useState(true);
const baseURL = "https://randomuser.me/api/?results=100"
useEffect( () => {
  
        axios.get(baseURL).then((response) => {
            setuserData(response.data.results);
setloading(false);

        }
        ).catch(err => console.log(err))




// const response = await axios.get("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole/");
console.log(userData);
console.log(loading);
}, [baseURL])
// let displayUsers = userData.map((user) => {
//     return (
//         <>
//         <h1 key={user.cell}>{ user.gender}, {user.cell}</h1>
//         </>
//     );
// });
// const mainContent = () => (
//         <>
//         <div>
//         {displayUsers}
//        </div>
//         </>
//     )
    const loadingContent = () => (
       <h1>Loading.....</h1>
    );
    const lastUserIndex = currentPage * usersPerPage;
    const firstUserIndex = lastUserIndex -usersPerPage;
    const currentUsers = userData.slice(firstUserIndex, lastUserIndex)
    
return (<div>
        {
                loading ? loadingContent() : <>
                <UserList userData={currentUsers}/>
                <div className="pagination-buttons">
                <button  disabled={currentPage <= 1}  onClick={() => setCurrentPage(currentPage-1)}>Previous</button>
                <Pagination totalUsers={userData.length} usersPerPage={usersPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}/>
                   <button  disabled={currentPage >= userData.length/usersPerPage} onClick={() => setCurrentPage(currentPage+1)}>Next</button>
                </div>
               
                </>
        }
       
    

   
    </div>
 

        
       
   
     );
}

export default Users;
