import React from "react";
import './Pagination.css'
const Pagination = ({totalUsers, usersPerPage, setCurrentPage, currentPage}) => {
    let pages = []; 
    for (let i= 1; i<= Math.ceil(totalUsers/usersPerPage);i++){
        pages.push(i)
    }
const pageNo = 100
    return ( 
        <div  className="pagination-buttons-container"> 
          
            {pages.map((page,index) => {
                 
               return (
                <div>
                   
                 <button onClick={() => setCurrentPage(page)} className={
                    page == currentPage ? 'active' : ''}>{page}</button>
                      
                    </div>)
                    
            })}
        
        </div>
     );
}
 
export default Pagination;