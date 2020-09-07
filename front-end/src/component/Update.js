import React from "react";
import {Link,withRouter} from 'react-router-dom';
class Update extends React.Component {
    constructor(props){
        super(props);
        

    }
    handleDelete = ()=>{
        const status = this.props.location.state.updateStatus;

        const statusList = this.props.location.state.statusList;
        for(let i=statusList.length-1;i>=0;i--){
            if(statusList[i].name === status.name){
                statusList.splice(i,1);
            }
        }
        console.log(statusList)
        for(let s of statusList){
           for(let j=s.connect.length-1;j>=0;j--){
            if(s.connect[j].name === status.name){
                s.connect.splice(j,1);
            }
           }
        }
        
        this.props.history.push("/");
    }
    deleteNode= (node)=>{
        const statusList = this.props.location.state.statusList;
        
    }
    render() {
        return (
            <div>
                <Link to="/">Main Page </Link>
                <div>Status Name: {this.props.location.state.updateStatus.name}<span><button onClick={this.handleDelete}>delete</button></span></div> 
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