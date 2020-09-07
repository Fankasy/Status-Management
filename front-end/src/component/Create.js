import React from "react";
import {Link} from "react-router-dom";
import Node from "../Node";
class Create extends React.Component{
    constructor(props){
        super(props);
        this.state={
            input: "",
            selectStatus: this.props.statusList.list[0],
            statusList: this.props.statusList.list
        }
    }
    handleInput = (e)=>{
        this.setState({
            input: e.target.value
        })
    }
    handleSelect = (e)=>{
        this.setState({ 
            selectStatus: this.props.statusList.list[e.target.value]
        })
    }
    handleCreate=()=>{
        const newStatusName = this.state.input;
        const list = this.props.statusList.list;

        for(let l of list){
            if(l.name === this.state.input) {
                alert("Status exist!! Please enter new one");
                return;
            }
        }
        let newStatus = new Node();
        newStatus.name = newStatusName;
        newStatus.connect.push(this.state.selectStatus);
        this.props.statusList.list.push(newStatus);
        this.setState({
            statusList: this.props.statusList.list
        }
        )
        alert("Add status successfully")
    }
    render() {
        return (
            <div>
                <Link to="/">Main Page </Link>
                <div>Status Name:<input type = "text" onChange={this.handleInput}/></div>
                <div>Could be transfer to:</div>
                <select onChange={this.handleSelect}>
                    {this.state.statusList.map((status,index)=>{
                        return (
                        <option key={index} value={index}>{status.name}</option>
                        )
                    })}
                </select>

                <button onClick={this.handleCreate}>Create Status</button>
            </div>
    
        )
    }
}
export default Create;