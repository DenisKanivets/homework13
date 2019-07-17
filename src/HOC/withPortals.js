import React from "react";   
import ReactDOM from "react-dom";

const withPortals = domNode => Component => props => ReactDOM.createPortal(<Component {...props} />, domNode)

export default withPortals