import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {connect} from 'react-redux';

class HeaderComponent extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <nav className="navbar navbar-expand-sm navbar-dark">
        <ul className="navbar-nav text-xs-center">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/product">product</Link>
          </li>
          <li className="nav-item">
            <div className="nav-link">{this.props.user && this.props.user.email}</div>
          </li>
        </ul>
        {/*<h1 style={{float: 'right'}}>{this.props.num}</h1>*/}
      </nav>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    num: store.todo.carts.length,
    user: store.login,
  }
}

export default connect(mapStateToProps)(HeaderComponent)
