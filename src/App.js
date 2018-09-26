import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Loadable from 'react-loadable';

import asyncComponent from "./components/asyncComponent";

import Home from './components/home';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./components/header";
//import ProductList from "./components/productlist";
import LoginComponent from "./components/login";
import { default as ToDoList } from "./components/todolist";
import { default as AddToDo } from "./components/addtodo";
//import Counter from './components/counterApp';
import Shift from './components/shift';
import User from './components/user';
import UserDetails from './components/user-details';
import NotFound from './components/notfound';

const Counter = asyncComponent(() => import("./components/counterApp"));

const Loading = () => <div>Loading...</div>;

const ProductList = Loadable({
  loader: () => import('./components/productlist'),
  loading: Loading,
});

'http://d-enzelin.bitballoon.com/'
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/login" component={LoginComponent}></Route>
          <Route path="/product" component={ProductList}></Route>
          <Route path="/counterapp" component={Counter}></Route>
          
          <Route path="/shiftapp" component={Shift}></Route>

          <Route exact path="/user" component={User}></Route>
          <Route exact path="/user/:id" component={UserDetails}></Route>

          <Route
             path="/todoapp"
             render={(props)=>{
                     return (<div><AddToDo/><ToDoList/></div>)
             }}
          />

          <Route
             path="/signup"
             render={(props)=>{
                     return (<div className="signup-container">
                        <h1>Sign up coming soon....</h1>
                      </div>)
             }}
          />

          <Route component={NotFound}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
