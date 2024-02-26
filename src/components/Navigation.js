import React from "react";
import "./Navigation.css";
function Navigation(props){
    return (
            <nav className="navbar">
                <ul className="nav">
                    <li className="list">{props.value}</li>
                    <li className="list">{props.valueone}</li>
                    <li className="list">{props.valuetwo}</li>
                    <li className="list">{props.valuethree}</li>
                </ul>
                
            </nav>
    );
}
export default Navigation;