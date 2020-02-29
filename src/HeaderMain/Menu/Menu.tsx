import React from "react";
import './Menu.css'

class Menu extends React.Component<any, any> {

    countryList = ["Italy", "Spain", "Germany", "Poland"];

    render() {

        return (
            <div>
                <ul>
                    {this.countryList.map((value: string, index: number) => {
                        return <li key={index}
                                   onClick={() => this.props.update(value)}>{value}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Menu;
