import React from 'react';
import { Link } from 'react-router-dom';
import Node from '../Node';
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSelectStatus: this.props.statusList.list[0],
            targetValue: this.props.statusList.list[0],
            updateStatus: this.props.statusList.list[0],
            transferResult: false,
            finishTransfer: false,
            hasPath: false,
            path:[],
            transferrable:"Check if it could transferrd directly"
        }
    }
    findChild = (node, set, target) => {
        for (let c of node.connect) {
            console.log(c.name);
            if (c.name === target.name && !set.has(c.name)) {
                set.add(c.name);
                return true;
            }
            else if (set.has(c.name)){
                continue;
            }
            else {
                set.add(c.name);
                if(this.findChild(c,set,target)) {
                    return true;
                }
            }
        }
        return false;
    }

    findPath = (node,target)=>{
        let queen = [];
        let set = new Set();
        queen.push(node);
        while(queen.length!==0) {
            let tmp = queen.shift();
            for(let status of tmp.connect) {
                if(set.has(status.name)){
                    continue;
                }
                else{
                    if(status.name === target.name) {
                        status.pathParent = tmp;
                        return status;
                    }
                    else{
                        status.pathParent = tmp;
                        set.add(status.name);
                        queen.push(status);
                    }
                    
                }

            }
        }
        return null;
    }
    findTransfer=(current,target)=>{
        if(current.name === target.name){
            this.setState({
                transferrable:"Same status, you don't need to transfer"
            })
            return;
        }
        for(let c of current.connect){
            if(c.name === target.name) {
                this.setState({
                    transferrable: "Yes, it could be transferrd"
                })
                return;
            }
        }
        this.setState({
            transferrable: "Sorry,it could not be transferred"
        })
    }

    handleCurrentSelect = (e) => {
        this.setState({
            currentSelectStatus: this.props.statusList.list[e.target.value]
        })
    }
    handleUpdateSelect = (e) => {
        this.setState({
            updateStatus: this.props.statusList.list[e.target.value]
        })
    }
    handleTargetSelect = (e) => {
        this.setState({
            targetValue: this.props.statusList.list[e.target.value]
        })
        const target = this.props.statusList.list[e.target.value];
        const current = this.state.currentSelectStatus;
        console.log(target)
        console.log(current)
        if (this.findChild(current, new Set(), target)) {
            this.setState({
                transferResult: true,
                finishTransfer: true
            })
        }
        else {
            this.setState({
                finishTransfer: true,
                transferResult: false
            })
        }
        let p = this.findPath(current,target);
        if(!p||p.length === 0){
            this.setState({
                hasPath:false
            })
            return;
        }
        let pa = [];
        while( p!= null){
            pa.unshift(p.name);
            let tmp = p.pathParent;
            if(!tmp||p.name === tmp.name){
                break;
            }
            p.pathParent = null;
            p=tmp;
        }
        this.setState({
            path:pa,
            hasPath:true
        })

    }
    handleTransferred=(e)=>{
        const target = this.props.statusList.list[e.target.value];
        const current = this.state.currentSelectStatus;
        this.findTransfer(current,target);

    }
    render() {
        const statusList = this.props.statusList;
        return (
            <div className="App">
                <h1>Status Management system</h1>
                <div>Current Status is:
                    <span><select onChange={this.handleCurrentSelect}>
                        {statusList.list.map((status, key) => {
                            return (
                                <option key={key} value={key}>{status.name}</option>
                            )
                        })}
                    </select></span>
                    <span><Link className="btn-info btn" to="/create">Create Status</Link></span>

                </div>
                <div>Update Status:
                    <span>
                        <select onChange={this.handleUpdateSelect}>
                            {statusList.list.map((status, key) => {
                                return (
                                    <option key={key} value={key}>{status.name}</option>
                                )
                            })}
                        </select>

                    </span>
                    <span><Link className="btn-success btn" to={{
                        pathname: "/update",
                        state: {
                            updateStatus: this.state.updateStatus,
                            statusList:this.props.statusList.list
                        }
                    }}>
                        Update Status
                        </Link>
                    </span>
                </div>
                <div>Could be transfer to
                    <select onChange={this.handleTargetSelect}>
                        {statusList.list.map((status, key) => {
                            return (
                                <option key={key} value={key}>{status.name}</option>
                            )
                        })}
                    </select>

                </div>
                {this.state.finishTransfer ?
                    <div>
                        {this.state.transferResult?<div>Yes,it could be transferrd</div>
                        :<div>Nope, it couldn't be transferrd</div>}
                    </div> :
                    <div>
                            Transfer result here
                    </div>}
                <div>How could be transfer to ?</div>
                        {this.state.hasPath?<div>{this.state.path}</div>:<div>Transfer path</div>}
                <div>Transferred to?
                    <span>
                    <select onChange={this.handleTransferred}>
                        {statusList.list.map((status, key) => {
                            return (
                                <option key={key} value={key}>{status.name}</option>
                            )
                        })}
                    </select>
                    </span>
                </div>
                    <div>{this.state.transferrable}</div>
                
            </div>
        )
    }
}
export default Home;