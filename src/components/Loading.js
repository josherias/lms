import React from 'react'
import '../styles/Loading.css'
import loading from '../img/loading.gif';

function Loading() {
    return (
        <div className="loading">
            <div className="loading__container">
            <img src={loading} alt=""/>
            </div>
        </div>
    )
}

export default Loading
