import logo from './logo.svg';
import './App.css';
import './Components/two.css'
import React from 'react';
import Task from './Components/Task.js';
import Tasktwo from './Components/Tasktwo.js';
import Taskthree from './Components/Taskthree.js';
import Home from './Components/Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Tasktwo from './Components/Tasktwo.js';



const App = () => {
  return (
    <>
    <Task/>
    <hr/>
    <Tasktwo/>
    <hr/>
    <Taskthree/>
    <hr/>
    <Home/>
    </>
  )
}

export default App;



