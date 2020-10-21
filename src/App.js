import React from "react";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Topic from "./pages/Topic";
import Instructor from "./pages/Instructor";
import Notfound from "./pages/Notfound";
import SignUp from "./pages/SignUp";
import Foooter from "./components/Foooter";
import NavBar from "./components/NavBar";
import CategoryPage from './pages/CategoryPage';


function App() {
  return (
    <div className="App">

    <NavBar/>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/course" component={Course} />
        <Route exact path="/course/topic" component={Topic} />
        <Route exact path="/categories" component={CategoryPage} />
        <Route exact path="/instructor" component={Instructor} />
        <Route component={Notfound} />
      </Switch>
      <Foooter/>

    </div>
  );
}

export default App;
