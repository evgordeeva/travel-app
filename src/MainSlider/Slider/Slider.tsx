import React from "react";
import './Slider.css'
import Tornado from '../../Assets/tornado.jpg'
import Shaman from '../../Assets/shaman.jpeg'
import Oblivion from '../../Assets/oblivion.jpg'
import Dragon from '../../Assets/dragon.jpg'
import Furius3 from '../../Assets/furius3.jpg'
import Shambahala from '../../Assets/shambahala.jpg'
import Blue_fire from '../../Assets/blue_fire.jpg'
import Silver_star from '../../Assets/silver_star.jpg'
import Atlantica from '../../Assets/atlantica.jpg'
import Formula from '../../Assets/formula.jpg'
import Zadra from '../../Assets/zadra.jpg'
import Hyperion from '../../Components/hyperion.jpg'

class Slider extends React.Component<any, any> {

    countries = [
        {country: "Italy", images: [Tornado, Shaman, Oblivion]},
        {country: "Spain", images: [Dragon, Furius3, Shambahala]},
        {country: "Germany", images: [Blue_fire, Silver_star, Atlantica]},
        {country: "Poland", images: [Formula, Zadra, Hyperion]}
    ];

    constructor(props: any) {

        super(props);
        this.state = {
            countries: this.countries,
        };

    }

    getImages(country: string): string[] {
        return this.countries.filter(x => x.country === country)[0].images;
    }


    render() {

        return (

            <div className="slider">
                <input type="radio" name="switch" id="btn1"/>
                <input type="radio" name="switch" id="btn2"/>
                <input type="radio" name="switch" id="btn3"/>
                <div className="switch">
                    <label htmlFor="btn1"></label>
                    <label htmlFor="btn2"></label>
                    <label htmlFor="btn3"></label>
                </div>
                <div className="slider-inner">
                    <div className="slides">
                        {this.getImages(this.props.updateCountry).map((imageLink: string, index: number) => {
                            return <img src={imageLink} alt="image1" key={index}/>
                        })}

                    </div>
                </div>
            </div>
        )
    }
}

export default Slider;
