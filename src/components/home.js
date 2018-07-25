import React from 'react';

import {Link } from "react-router-dom";

export default class Home extends React.Component {
	render(){
		return (
			<div className="">
				<div className="row" style={{marginTop: '50px'}}>
					<div className="col-12">
						<div>
							<ul className="home-links">
								<li><Link to="/counterapp">COUNTER APP</Link></li>
								<li><Link to="/todoapp">TODO APP</Link></li>
								<li><Link to="/login">LOGIN</Link></li>
								<li><Link to="/signup">SIGNUP</Link></li>
								<li><Link to="/shiftapp">SHIFT APP</Link></li>
								<li><Link to="/user">USER</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}