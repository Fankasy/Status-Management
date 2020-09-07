import React from "react";
import {Link,withRouter} from 'react-router-dom';
class Update extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectStatus : []
        }

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
    handleSelect = (e)=>{
        let newVal = this.props.location.state.statusList[e.target.value];
        let selectGroup = this.state.selectStatus;
        selectGroup.indexOf(newVal) === -1
            ? selectGroup.push(newVal) :
            selectGroup.length === 1 ? (selectGroup = [])
                : selectGroup.splice(selectGroup.indexOf(newVal), 1)
        this.setState({
            selectStatus: selectGroup
        })

    }
    handleUpdate =()=>{
        const currentStatus = this.props.location.state.updateStatus;
        const targetStatus = this.state.selectStatus;
        currentStatus.connect = [];
        currentStatus.connect = targetStatus;
        this.props.history.push("/");

    }

    render() {
        return (
            <div>
                <Link to="/">Main Page </Link>
                <div>Status Name: {this.props.location.state.updateStatus.name}<span><button onClick={this.handleDelete}>delete</button></span></div> 
                <div>Could be transferred to:</div>
                <select onChange={this.handleSelect} multiple={true}>
                    {this.props.location.state.statusList.map((status,index)=>{
                        return (
                        <option key={index} value={index}>{status.name}</option>
                        )
                    })}
                </select>
                <button onClick={this.handleUpdate}>Update status</button>
            </div>
        )
    }
}
export default Update;