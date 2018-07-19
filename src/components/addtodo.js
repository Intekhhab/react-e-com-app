import React from "react";
import {connect} from "react-redux";

class AddToDo extends React.Component{

	constructor(props) {
		super(props);
		this._submit = this._submit.bind(this);
		this.state = {
			todotext: '',
		};
	}

	_submit(e) {
		e.preventDefault();
		if (!document.getElementById('todo').value) return;
		this.props.dispatch({type: 'ADD_NEW_TODO', text: document.getElementById('todo').value});
		document.getElementById('todo').value = '';
		this.setState({todotext: '',});
	}

	render() {
		return(
			<div className="container">
			  <div className="addtodo-container">
			  	  <h2>Add to do</h2>
			  
				  <form className="" onSubmit={this._submit}>
				    <div className="row">
				    	<div className="col-12">
				    		<div className="form-group">
						      <label htmlFor="email">To do name:</label>
						      <input type="todo" className="form-control" id="todo" placeholder="Enter to do" name="todo"/>
						    </div>
				    	</div>
				    </div>

				    <div className="row">
				    	<div className="col-12">
						    <div className="form-group">
						      <label htmlFor="pwd">Status:</label>

						      <div className="dropdown">
								  <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
								    Select Status
								  </button>
								  <div className="dropdown-menu">
								    <a className="dropdown-item" href="#">done</a>
								    <a className="dropdown-item" href="#">pending</a>
								  </div>
								</div>
						    </div>
						  </div>
						</div>
				    
				    <div className="row">
				    	<div className="col-12">
				    		<button type="submit" className="btn btn-primary">Submit</button>
				    	</div>
					</div>
				  </form>
			  </div>
			</div>
		)
	}
}



export default connect(null)(AddToDo);