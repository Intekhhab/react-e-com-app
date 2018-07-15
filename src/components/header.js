import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {connect} from 'react-redux';

class HeaderComponent extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/product">product</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Signup</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/todoapp">ToDoApp</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/counterapp">CounterApp</Link>
          </li>
        </ul>
        {/*<h1 style={{float: 'right'}}>{this.props.num}</h1>*/}
      </nav>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    num: store.todo.carts.length
  }
}

export default connect(null)(HeaderComponent)
