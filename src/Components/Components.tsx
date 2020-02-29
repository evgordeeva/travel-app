import React from "react";
import {Route} from "react-router-dom";

// @ts-ignore
export default function AppliedRoute({component: C, appProps, ...rest}) {
    return (
        <Route {...rest} render={props => <C {...props} {...appProps} />}/>
    );
}






