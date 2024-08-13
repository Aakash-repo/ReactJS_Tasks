import React from "react";
import Img from '../images/congrats-card-profile-img.png'
import Watch from '../images/congrats-card-watch-img.png'
const Task=() =>{
    return(
        <>
        <div className="back">
        
        <h1 className="heading">Congratulations</h1>
        <div class="text-center">
        <div className="box">
        <img src={Img} className="imagepos"/> <br/>
        <h3 className="cen">Aakash M </h3><br/>
        <p className="cen">KG College of Arts and Science, Coimbatore</p>
        <img src={Watch} className="imagepos"/> 

        </div>


</div>
<br/><br/>
</div>

</>
    );
}

export default Task;