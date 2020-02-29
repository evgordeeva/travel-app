import React from "react";
import "./ItemOne.css";
import Garda1 from '../../Assets/garda1.jpg'

class ItemOne extends React.Component {
    render() {
        return (
            <div className="itemOne">
                <img className="img1" src={Garda1} alt="Garda1"/>
            </div>
        )
    }
}

export default ItemOne;
