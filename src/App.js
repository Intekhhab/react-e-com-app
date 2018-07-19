import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./components/header";
import ProductList from "./components/productlist";
import LoginComponent from "./components/login";
import { default as ToDoList } from "./components/todolist";
import { default as AddToDo } from "./components/addtodo";
import Counter from './components/counterApp'
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
          <Route path="/counterapp" component={Counter}></Route>
          
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
