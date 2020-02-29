import React from "react";
import "./Slider02.css";
import KingdaKa from '../../Assets/KingdaKa.jpg'
import TopThrillDragster from '../../Assets/TopThrillDragster.jpg'
import RedForce from '../../Assets/RedForce.jpg'
import Superman from '../../Assets/Superman.jpg'
import Tower from '../../Assets/Tower.jpg'
import Fury from '../../Assets/Fury.jpg'
import SteelDragon2000 from '../../Assets/SteelDragon2000.jpg'


function Slider02() {
    return (
        <div className="Slider02">
            <div className="dws-wrapper">
                <ul className="accordion">
                    <li><img src={KingdaKa} alt="KingdaKa"/></li>
                    <li><img src={TopThrillDragster} alt="TopThrillDragster"/></li>
                    <li><img src={RedForce} alt="RedForce"/></li>
                    <li><img src={Superman} alt="Superman"/></li>
                    <li><img src={Tower} alt="Tower"/></li>
                    <li><img src={Fury} alt="Fury"/></li>
                    <li><img src={SteelDragon2000} alt="SteelDragon2000"/></li>
                </ul>
            </div>
        </div>
    )
}

export default Slider02;
