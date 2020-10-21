import React,{useState,useEffect} from "react";
import "../styles/CoursesContainer.css";
import Course from "./Course";
import Loading from './Loading';


function CoursesContainer({courses,loading}) {
  if(loading) {
    return  <Loading/>
  }

  return (
    <div className="courses">
      <div className="courses__container">
      {
        courses.map(course => <Course
          key = {course.id}
          image={course.image}
          heading={course.heading}
          description={course.description}
        /> )
      }
      </div>
    </div>
  );
}

export default CoursesContainer;
