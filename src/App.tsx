import React, {useState} from 'react';
import './App.css';
import HeaderMain from "./HeaderMain/HeaderMain";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Components/Routes";


function App() {
    const [isAuthenticated, userHasAuthenticated] = useState(false);


    return (
        <div className="App">

            <BrowserRouter>{isAuthenticated ? <HeaderMain/> : null}


                <Routes appProps={{isAuthenticated, userHasAuthenticated}}/>

            </BrowserRouter>

            {/*<SecondSlider/>*/}
            {/*<Reviews/>*/}
        </div>
    );
}

export default App;
