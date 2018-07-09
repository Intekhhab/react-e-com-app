import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./components/header";
import ProductList from "./components/productlist";
import LoginComponent from "./components/login";
import NotFound from './components/notfound';
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <Switch>
        <Route exact path="/" component={LoginComponent}></Route>
          <Route path="/login" component={LoginComponent}></Route>
          <Route path="/product" component={ProductList}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
