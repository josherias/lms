import React,{useState,useEffect} from "react";
import Topic from "../components/Topic";
import '../styles/CoursePage.css';


function Course() {

const topicsArray = [
  {
    'id' : 1, 
    'topic' : "QUEUEING SYSTEMS",
  },
  {
    'id' : 2, 
    'topic' : "FAMILIARISATION WITH LMS, INTRODUCTIONS AND EXPECTATIONS",
  },
  {
    'id' : 3, 
    'topic' : "PERFORMANCE ENGINEERING FOR EVOLVING SYSTEMS",
  },
  {
    'id' : 4, 
    'topic' : "COMPOSITE SYSTEM MODELING",
  },
  
];

const [topics, setTopics] = useState([]);


 useEffect(() => {
  const fetchTopics = () => {
    setTopics(topicsArray);
  }

  fetchTopics();
}, []);


  return <div className="course__page">
  <div className="course__page__container">
  <h1 className="course__title">Programming Basics with java</h1>
  <h2>Course Description</h2>
  <div className="course__row1">
  
<div className="col1">
<p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti vero explicabo 
officia aut delectus repellendus minus quibusdam rerum, ratione atque soluta temporibus
 neque praesentium reiciendis debitis ex dolorem ut itaque. Officiis cumque libero porro! 
 Iusto quo repudiandae rem velit sequi!
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repudiandae non maiores, quis,
  molestias eaque blanditiis tenetur architecto quos omnis
  consectetur vel beatae obcaecati assumenda rem soluta corrupti, quisquam ad?</p>
</div>
<div className="col2">
<p>Status : Published</p>
<p>Creation Date : 2018-06-01</p>
<p>Instructor : Josh Erias</p>
<button className="enroll-btn">Enroll in course</button>
</div>


  </div>
  <div className="course__row2">
  
  <h2>Topics</h2>

  <div className="topics__container">

  {
    topics.map(topic =>  <Topic key={topic.id} topic={topic.topic} unit={topic.id}/> )
  }

  </div>

  </div>
  </div>


  </div>;
}

export default Course;
