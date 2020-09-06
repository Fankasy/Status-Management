import React from "react";
import {Link} from 'react-router-dom';
class Update extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">Main Page </Link>
                <div>Status Name:<span><button>delete</button></span></div> 
                <div>Could be transferred to:</div>
                <ul>
                    <li>Test</li>
                </ul>
                <button>Update status</button>
            </div>
        )
    }
}
export default Update;