import React from 'react';
import {connect} from 'react-redux';

import {INCREMENT, DECREMENT, incrementCounter, decrementCounter} from '../actions/counter';

class Counter extends React.Component{
	constructor(props){
		super(props);
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	increment() { 
		this.props.dispatch(incrementCounter());
	}

	decrement() {
		this.props.dispatch(decrementCounter());
	}

	render() {
		return (
			<div className="container">
				<div className="counter-app">
					<h1>{this.props.count}</h1>
					<button onClick={this.increment} type="button" className="btn btn-primary" style={{width: '50px'}}>+</button>
					<button onClick={this.decrement} type="button" className="btn btn-info"  style={{marginLeft: '20px', width: '50px'}}>-</button>
				</div>
			</div>
		)
	}
}
const mapStatetoProps = (store) => {

	return {
		count: store.counter,
	}
}
export default connect(mapStatetoProps)(Counter);