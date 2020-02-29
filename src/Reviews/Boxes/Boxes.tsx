import React from "react";
import './Boxes.css'
import Shanghai from '../../Assets/Shanghai.jpg'
import Abu_dhabi from '../../Assets/Abu_dhabi.jpg'
import Orlando from '../../Assets/Orlando.jpg'
import Efteling from '../../Assets/Efteling.jpg'
import Tokyo from '../../Assets/Tokyo.jpg'

function Boxes() {
    return (
        <div className="boxes">
            <div className="backFor5">
                <div className="wrapFor5">
                    <div className="firstBox">
                        <div className="firstImg">
                            <img className="picture1" src={Shanghai} alt="Shanghai"/>
                        </div>
                        <div className="firstText">
                            <div className="firstRaiting"><p className="firstRait"><b>5.0</b></p></div>
                            <div className="firstTitleFor5">Shanghai Disneyland</div>
                            <br/>
                            <div className="firstCont">Shanghai Disneyland is authentically Disney and distinctly
                                Chinese. It was created for everyone, bringing to life timeless characters and stories
                                in a magical place that will be a source of joy, inspiration, and memories for
                                generations to come.
                            </div>
                        </div>
                    </div>
                    <div className="wrap2">
                        <div className="infoBoxFor5">
                            <div className="image">
                                <img className="picture" src={Abu_dhabi} alt="Abu_dhabi"/>
                            </div>
                            <div className="textFor5">
                                <div className="raiting4"><p className="rait4"><b>4.0</b></p></div>
                                <div className="titleFor5">Warner Bros. World <br/> Abu Dhabi</div>
                            </div>
                        </div>
                        <div className="infoBoxFor5">
                            <div className="image">
                                <img className="picture" src={Orlando} alt="Orlando"/>
                            </div>
                            <div className="textFor5">
                                <div className="raiting1"><p className="rait1"><b>1.0</b></p></div>
                                <div className="titleFor5">Universal Orlando's <br/> Islands of Adventure</div>
                            </div>
                        </div>
                    </div>
                    <div className="wrap2">
                        <div className="infoBoxFor5">
                            <div className="image">
                                <img className="picture" src={Efteling} alt="Efteling"/>
                            </div>
                            <div className="textFor5">
                                <div className="raiting2"><p className="rait2"><b>2.0</b></p></div>
                                <div className="titleFor5">Discover a World <br/> of Wonders with Efteling</div>
                            </div>
                        </div>
                        <div className="infoBoxFor5">
                            <div className="image">
                                <img className="picture" src={Tokyo} alt="Tokyo"/>
                            </div>
                            <div className="textFor5">
                                <div className="raiting3"><p className="rait3"><b>3.0</b></p></div>
                                <div className="titleFor5">Tokyo DisneySea <br/> has an overall nautical exploration
                                    theme to it.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Boxes;
