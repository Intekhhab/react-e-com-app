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
			  <h2>Add New To Do form</h2>
			  <form onSubmit={(e) => {this._submit(e)}}>
			    <div className="form-group">
			      <label htmlFor="todo">TODO:</label>
			      <input autoComplete="off" type="todo" className="form-control" id="todo" placeholder="Enter To Do" name="todo" />
			    </div>
			    <button type="submit" className="btn btn-primary">Submit</button>
			  </form>
			</div>
		)
	}
}



export default connect(null)(AddToDo);