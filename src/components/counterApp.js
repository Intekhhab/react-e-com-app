import React from 'react';
import {connect} from 'react-redux';

import {INCREMENT, DECREMENT, ADD_COUNTER, REMOVE_COUNTER,
	incrementCounter, decrementCounter, addCounterFunction, removeCounter
} from '../actions/actions';

class Counter extends React.Component{
	constructor(props){
		super(props);
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
		this.addNewCounter = this.addNewCounter.bind(this);
		this.remove = this.remove.bind(this);
	}

	increment(index) { 
		this.props.dispatch(incrementCounter(index));
	}

	decrement(index) {
		this.props.dispatch(decrementCounter(index));
	}
	addNewCounter() {
		this.props.dispatch(addCounterFunction());
	}

	remove(index) {
		this.props.dispatch(removeCounter(index));
	}

	render() {
		return (
			<div className="container">
				<div className="counter-container">
					<button type="button" className="btn btn-warning" onClick={this.addNewCounter}> Add Counter</button>
					{
						this.props.count.map((elem, index)=>{
							return (
								<div className="counter-app" key={index}>
								<h1>{elem}</h1>
								<button onClick={()=>{this.increment(index)}} type="button" className="btn btn-primary" style={{width: '50px'}}>+</button>
								<button onClick={()=>{this.decrement(index)}} type="button" className="btn btn-info"  style={{marginLeft: '20px', width: '50px'}}>-</button>
								<button onClick={()=>{this.remove(index)}} type="button" className="btn btn-danger" style={{marginLeft: '20px'}}>Remove Counter</button>
							</div>
							)
						})
					}
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