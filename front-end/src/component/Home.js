import React from 'react';
import {Link} from 'react-router-dom';
function home(props) {
    const statusList = props.statusList;
    return (
        <div className="App">
      <h1>Status Management system</h1>
      <div>Current Status is:   
          <span><select>
                {statusList.list.map((status,key)=>{
                    return(
                        <option key={key}>{status.name}</option>
                    )
                })}
              </select></span>
          <span><Link className= "btn-info btn"to="/create">Create Status</Link></span>

      </div>
      <div>Update Status: <span><Link className= "btn-success btn"to="/update">Update Status</Link></span></div>
      <div>Could be transfer to 
          <select>

          </select>

      </div>
      <div>Transfer result</div>
      <div>How could be transfer to ?</div>
      <div>Transfer path</div>
      <div>Transferred to?</div>
    </div>
    )
}
export default home;