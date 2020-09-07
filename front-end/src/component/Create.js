import React from "react";
import { Link } from "react-router-dom";
import Node from "../Node";
class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            selectStatus: [],
            statusList: this.props.statusList.list
        }
    }
    handleInput = (e) => {
        this.setState({
            input: e.target.value
        })
    }
    handleSelect = (e) => {
        let newVal = this.props.statusList.list[e.target.value];
        let selectGroup = this.state.selectStatus;
        selectGroup.indexOf(newVal) === -1
            ? selectGroup.push(newVal) :
            selectGroup.length === 1 ? (selectGroup = [])
                : selectGroup.splice(selectGroup.indexOf(newVal), 1)
        this.setState({
            selectStatus: selectGroup
        })

    }
    handleCreate = () => {
        const newStatusName = this.state.input;
        if (!newStatusName) {
            alert("Please Enter a name")
            return;
        }
        const list = this.props.statusList.list;

        for (let l of list) {
            if (l.name === this.state.input) {
                alert("Status exist!! Please enter new one");
                return;
            }
        }
        let newStatus = new Node();
        newStatus.name = newStatusName;
        for (let status of this.state.selectStatus) {
            newStatus.connect.push(status);
        }
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
                <div>Status Name:<input type="text" onChange={this.handleInput} /></div>
                <div>Could be transfer to:</div>
                <select onChange={this.handleSelect} multiple={true} >
                    {this.state.statusList.map((status, index) => {
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