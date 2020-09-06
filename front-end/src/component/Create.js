import React from "react";
import {Link} from "react-router-dom";
class Create extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <Link to="/">Main Page </Link>
                <div>Status Name:<input type = "text"/></div>
                <div>Could be transfer to:</div>
                <ul>
                    <li>Test </li>
                </ul>
                <button>Create Status</button>
            </div>
    
        )
    }
}
export default Create;