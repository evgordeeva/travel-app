import {Switch} from "react-router-dom";
import React from "react";
import AppliedRoute from "./Components";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Extreme from "../Middle/Extreme/Extreme";

// @ts-ignore
export default function Routes({appProps}) {
    return (
        <Switch>
            <AppliedRoute path="/home" exact component={Home} appProps={appProps}/>
            <AppliedRoute path="/" exact component={Login} appProps={appProps}/>
            <AppliedRoute path="/extreme" exact component={Extreme} appProps={appProps}/>
            { /* Finally, catch all unmatched routes */}
            {/*<Route component={NotFound} />*/}
        </Switch>
    );
}
