import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './component/Home';
import Create from './component/Create';
import Update from './component/Update';
import Node from './Node';
import StatusList from './StatusList';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentStatus: null,
      statusList: new StatusList()
    }
  }

  render() {
    return (
      <BrowserRouter>
      
        <Route exact = {true} path ="/" render = {()=>(<Home statusList={this.state.statusList}/>) }/>
        <Route path = "/create" component = {Create}/>
        <Route path = "/update" component = {Update}/>
      </BrowserRouter>
    )
  } 
}

export default App;
