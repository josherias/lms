import React from "react";
import '../styles/TopicPage.css';
import video from '../img/2.mp4'
import file from '../img/1.pdf'

function Topic() {
  return <div className="topic__page">
  <div className="topic__container">
    <div className="topic__heading">
        <h2>Queing theory Lesson</h2>
        <h3>Unit 1 :</h3>
    </div>
    <div className="topic__description">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe numquam dolore vitae, doloremque laborum ad id temporibus debitis mollitia iusto, dicta similique suscipit nostrum, nobis vel provident? Impedit dolorem in repellat sed quidem laborum voluptas tempora cum atque saepe. Deleniti tempora tempore nulla a 
        nam vitae obcaecati, impedit dolores earum!</p>
    </div>
    <div className="topic__video">
        <h2 h2>Watch the Video Below</h2>
        <p>Watch the video below for additional content about the topic</p>
      
        <video controls>
          <source src={video} />
        </video>
    </div>
    <div className="topic__files">
        <p>Read more about the topic with the following files</p>
        <iframe src={file}><a href={file}></a> </iframe> 
        <p>Click to view File :  <a target='_blank' href={file}>File</a> </p>
    </div>

  </div>
  </div>
}

export default Topic;
