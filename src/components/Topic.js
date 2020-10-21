import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Topic.css';

function Topic({topic, unit}) {
    return (
        <div className="topic">
         <Link className="link" to="/course/topic">
            <h2>UNIT {unit}  : {topic.toUpperCase()}</h2>
        </Link>
        </div>
    )
}

export default Topic
