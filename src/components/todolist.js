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
      <div className="container">
        <h2>To Do List</h2>
        
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th>To Do Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            
            {
              this.props.todolist.map((elem, index) => {
                return (
                  <tr key={index}>
                    <td>{elem}</td>
                    <td>Pending</td>
                    <td>X</td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    todolist: store.todo.todolist,
  }
}

export default connect(mapStateToProps)(ToDoList)
