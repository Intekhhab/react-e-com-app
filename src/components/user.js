import React, { Component } from "react";

import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import axios from 'axios';

import user from '../data/people.json';

import Pagination from './pagination';

class User extends Component {
  constructor(props) {
    super(props);
    //this.setState = this.setState.bind(this);
    this.state = {
      users: [],
      currentPage: 1,
    };
    this.axiosCancelToken = undefined;
    this.setPagination = this.setPagination.bind(this);
    this.redirectToDetail = this.redirectToDetail.bind(this);
  }

  componentWillUnmount() {
    alert('User component unmount');
    this.axiosCancelToken.cancel();
  }

  setPagination(i) {
    if (i < 1 || i > Math.ceil(this.state.users.count/10)) return ;
    this.setState({currentPage: i});
    this.getUsers(i);
  }

  redirectToDetail(id) {
    this.props.history.push(`/user/${id}`)
  }

  componentDidMount = ()=> {
    this.getUsers(this.state.currentPage);

    /*fetch('https://swapi.co/api/people/')
    .then((response) => {
      console.log(response);
    })
    .catch( (error) =>{
      console.log(error);
      this.setState({users: user});
    });*/
    //this.setState({users: user});
  }

  getUsers(i) {
    let url = 'https://swapi.co/api/people/?page='+i;
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    this.axiosCancelToken = source;
    axios.get(url, {
      cancelToken: source.token
    })
    .then((response) => {
      //console.log(response);
      this.setState({users: response.data});
    })
    .catch( (error) =>{
      console.log(error);
      //this.setState({users: user});
    });
  }

  render() {
    const users = this.state.users && this.state.users.results || [];
    //console.log(users);
    return(
      <div>
      <div className="container">
        <div className="">
          <h2>USERS LIST</h2>
          
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th className="d-none d-md-block">Height</th>
                <th className="">Mass</th>
                <th>Gender</th>
                <th className="d-none d-sm-block">Eye Color</th>
                <th>Birth Year</th>
              </tr>
            </thead>
            <tbody>
              
              {
                users.map((u, i) => {
                  return (
                    <tr key={i} 
                    onClick={()=> {this.redirectToDetail(i+1)}}
                    className="cursor-pointer">
                      <td>{u.name}</td>
                      <td className="d-none d-md-block">{u.height}</td>
                      <td className="">{u.mass}</td>
                      <td>{u.gender}</td>
                      <td className="d-none d-sm-block">{u.eye_color}</td>
                      <td>{u.birth_year}</td>
                    </tr>
                  )
                })
              }

            </tbody>
          </table>
          {!users.length && <div className="loader"></div>}
        </div>
      </div>
      <Pagination records={this.state.users.count} currentPage={this.state.currentPage} setPagination={this.setPagination}/>
      
      </div>
    );
  }
}

export default connect(null)(User);