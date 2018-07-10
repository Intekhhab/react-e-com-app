import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {connect} from 'react-redux';

class ToDoList extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.props.todolist);
    return(
      <div className="container" style={{marginTop: '50px'}}>
        <h2>To Do List</h2>
        <ul className="list-group">
        {
          this.props.todolist.map((elem, index) => {
            return <li key={index} className="list-group-item">{elem} item</li> 
          })
        }
          
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    todolist: store.todolist,
  }
}

export default connect(mapStateToProps)(ToDoList)
