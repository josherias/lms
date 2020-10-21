import React from "react";
import "../styles/Pagination.css";


function Pagination({coursesPerPage, totalCourses,paginate}) {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalCourses/coursesPerPage); i++){
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {
        pageNumbers.map((page) => <span  key={page} onClick={()=> paginate(page)} className="active">  <a 
         className="link"> {page}</a>  </span> )
      } 
     
    </div>
  );
}

export default Pagination;
