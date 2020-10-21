import React from 'react'

import "../styles/CourseBar.css";

import DropDown from "./DropDown";
import SearchComponent from "./SearchComponent";

function CourseBar({categories, topics}) {
    return (
        <div className="course__topBar">
        <div className="courses__bar">
        <div className="course__bar__left">
       
          <DropDown
            label="Category"
            data={categories}
          />
          <DropDown
            label="Topic"
            data={topics}
          />
          
        </div>
        <div className="course__bar__right">
          <SearchComponent />
        </div>
      </div>
        </div>
    )
}

export default CourseBar
