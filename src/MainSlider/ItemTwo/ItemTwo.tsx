import React from "react";
import "./ItemTwo.css";
import Garda3 from '../../Assets/garda3.png'

class ItemTwo extends React.Component {
    render() {
        return (
            <div className="itemTwo">
                <img className="img2" src={Garda3} alt="Garda3"/>
            </div>
        )
    }
}

export default ItemTwo;
