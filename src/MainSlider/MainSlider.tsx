import React from "react";
import Slider from "./Slider/Slider";
import "./MainSlider.css";
import ItemOne from "./ItemOne/ItemOne";
import ItemTwo from "./ItemTwo/ItemTwo";
import Menu from "../HeaderMain/Menu/Menu";

class MainSlider extends React.Component<{}, any> {

    constructor(props: any) {

        super(props);
        this.state = {
            country: "Italy",
        };
        this.updateCountry = this.updateCountry.bind(this);
    }

    updateCountry(changedCountry: string) {
        this.setState({
            country: changedCountry
        });
    }

    render() {

        return (
            <div className="menu">

                <Menu update={this.updateCountry}/>
                <div>
                    <hr/>
                </div>
                <div className="Box">
                    <div className="inbox">
                        <div className="nestedbox"><Slider updateCountry={this.state.country}/></div>
                    </div>
                    <div className="inbox">
                        <ItemOne/>
                        <ItemTwo/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainSlider;
