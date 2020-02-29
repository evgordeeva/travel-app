import React from "react";
import './Title.css'
import {Link} from "react-router-dom";

function Title() {
    return (
        <div>
            <div className="linkContainer">
                <span><Link to="/home" className="firstlink">Home</Link></span>
                <span><Link to="/extreme" className="thirdlink">Extreme</Link></span>
                <span><Link to="/" className="secondlink">Logout</Link></span>
            </div>
            <div>
                <h1><p className="firstTitle">The</p> Adventures</h1>
            </div>
        </div>
    )
}

export default Title;
