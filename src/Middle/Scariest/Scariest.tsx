import React from "react";
import './Scariest.css'
import Dodonpa from "../../Middle/Dodonpa.jpg";
import Intimidator from "../../Middle/Intimidator.jpg";
import Thunder from "../../Middle/Thunder.jpg";

function Scariest() {
    return (
        <div className="Scariest">
            <div className="backFor3">
                <div className="wrapFor3">
                    <div className="infoBox">
                        <div className="imgFor3">
                            <img className="images" src={Dodonpa} alt="Dodonpa"/>
                        </div>
                        <div className="text">
                            <div className="textTitle"><b>Do-Dodonpa, Fuji-Q Highland, Japan</b></div>
                            <br/>
                            <div className="cont">Dodonpa is famous for the biggest acceleration! Confusing the skiers
                                with a not-so-fast start, the Doponda suddenly accelerates to 172 km / h in ...
                                attention ... 1.8 seconds! And then flings you up and down a nearly vertical loop.
                            </div>
                        </div>
                    </div>
                    <div className="infoBox">
                        <div className="imgFor3">
                            <img className="images" src={Intimidator} alt="Intimidator"/>
                        </div>
                        <div className="text">
                            <div className="textTitle"><b>Intimidator 305, Kings Dominion, USA</b></div>
                            <br/>
                            <div className="cont">A relative newcomer to the roller coaster world, The Intimidator 305
                                (getting scary from just one name ...) won the Golden Ticket Award in 2010 as the best
                                new roller coaster.
                            </div>
                        </div>
                    </div>
                    <div className="infoBox">
                        <div className="imgFor3">
                            <img className="images" src={Thunder} alt="Thunder"/>
                        </div>
                        <div className="text">
                            <div className="textTitle"><b> Thunder Dolphin, Tokyo Dome City, Japan</b></div>
                            <br/>
                            <div className="cont">The Thunder Dolphin is rather modest in terms of speed, altitude and
                                acceleration, relative to the roller coaster, but it has its own unique "trick". The
                                Dolphin path passes through a concrete ring, and also goes around a real building at a
                                tickling distance.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scariest;
