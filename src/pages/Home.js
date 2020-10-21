import React,{useState,useEffect} from "react";
import CoursesContainer from "../components/CoursesContainer";
import Pagination from "../components/Pagination";

import "../styles/Home.css";


import img from "../img/unnamed.png";
import img2 from "../img/pexels-format-1029757.jpg";
import img3 from "../img/pexels-lukas-574071.jpg";
import CourseBar from "../components/CourseBar";


function Home() {

  const coursesArray = [
    {
      'id' : 1,
      'image' : img,
      'heading' : 'All Access Subscriptions',
      'description' : 'Become the best coder you can have unlimited access to all existing and future course'
    },

    {
      'id' : 2,
      'image' : img2,
      'heading' : 'All Access Subscriptions',
      'description' : 'Become the best coder you can have unlimited access to all existing and future course'
    },
    {
      'id' : 3,
      'image' : img3,
      'heading' : 'The Ultimate Git Course',
      'description' : 'Become the best coder you can have unlimited access to all existing and future course'
    },

    {
      'id' : 4,
      'image' : img,
      'heading' : 'React Native course',
      'description' : 'The best react native course on the planet'
    },
    {
      'id' : 5,
      'image' : img2,
      'heading' : 'R language',
      'description' : 'The best language for data scientists'
    },

    {
      'id' : 6,
      'image' : img3,
      'heading' : 'All Access Subscriptions',
      'description' : 'Become the best coder you can have unlimited access to all existing and future course'
    },
    {
      'id' : 7,
      'image' : img2,
      'heading' : 'All Access Subscriptions',
      'description' : 'Become the best coder you can have unlimited access to all existing and future course'
    },
    {
      'id' : 8,
      'image' : img,
      'heading' : 'Python 3.9 Basics',
      'description' : 'Python three is out , so take a chance to grab this courses'
    },

    {
      'id' : 9,
      'image' : img3,
      'heading' : 'All Access Subscriptions',
      'description' : 'Become the best coder you can have unlimited access to all existing and future course'
    },

    {
      'id' : 10,
      'image' : img,
      'heading' : 'Complete java development',
      'description' : 'Become the best coder you can have unlimited access to all existing and future course'
    }
    
  ];

  const categoryArray = [
    {
      'id' : 1,
      'name' : 'Category one',
      'description' : 'This is the first category',
    },
    {
      'id' : 2,
      'name' : 'Category two',
      'description' : 'This is the first category',
    },
    {
      'id' : 3,
      'name' : 'Category Three',
      'description' : 'This is the second category',
    }
  ];

  const TopicArray = [
    {
      'id' : 1,
      'name' : 'Topic one',
      'description' : 'This is the first Topic',
    },
    {
      'id' : 2,
      'name' : 'Topic two',
      'description' : 'This is the first Topic',
    },
    {
      'id' : 3,
      'name' : 'Topic Three',
      'description' : 'This is the second Topic',
    }
  ];

  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(6);



  useEffect(() => {
    const fetchCourses = () => {
      setCourses(coursesArray);
    setLoading(false);  
    }
  
    fetchCourses();
  }, []);

  //get current courses
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);


  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className="home">
      <CourseBar categories={categoryArray} topics={TopicArray}/>
      <CoursesContainer courses = {currentCourses} loading={loading}  />
      <Pagination coursesPerPage= {coursesPerPage} totalCourses ={courses.length} paginate = {paginate} />

    </div>
  );
}

export default Home;
