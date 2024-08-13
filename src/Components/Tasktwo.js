import React from "react";
import csk from '../images/csk-img.png';
import rcb from '../images/rcb-img.png';

const Tasktwo = () =>{
    return(
    <>
    <div className="bgm">
    <br/>
    <h1 className="heading">Super Over League</h1>
    <div className="cont">
    
    <img src={csk} className="csk"/>
    <img src={rcb} className="rcb"/>
    </div>
    </div>
    </>
    )
}

export default Tasktwo;