import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '@material-ui/core/Button';

import {
	INCREMENT, 
	INCREMENTBY2,
	INCREMENTBY3,
	DECREMENT, 
	ADD_COUNTER, 
	REMOVE_COUNTER,
	incrementCounter, 
	incrementCounterBy2,
	incrementCounterBy3,
	incrementCounterBy4,
	incrementCounterBy5,
	decrementCounter, 
	addCounterFunction, 
	removeCounter
} from '../actions/actions';

class Counter extends React.Component{
	constructor(props){
		super(props);
		this.increment = this.increment.bind(this);
		this.incrementBy2 = this.incrementBy2.bind(this);
		this.incrementBy3 = this.incrementBy3.bind(this);
		this.incrementBy4 = this.incrementBy4.bind(this);
		this.incrementBy5 = this.incrementBy5.bind(this);
		this.decrement = this.decrement.bind(this);
		this.addNewCounter = this.addNewCounter.bind(this);
		this.remove = this.remove.bind(this);

		this.boundActionCreators = bindActionCreators({decrementCounter}, this.props.dispatch);
		//console.log(this.boundActionCreators, 'hello');
	}

	increment(index) { 
		this.props.dispatch(incrementCounter(index));
	}
	incrementBy2(index) {
		setTimeout(()=>{
			this.props.dispatch(incrementCounterBy2(index));
		}, 1000);
	}

	incrementBy3(index) {
		incrementCounterBy3(this.props.dispatch, index);
	}

	incrementBy4(index) {
		this.props.dispatch(incrementCounterBy4(index));
	}

	incrementBy5(index) {
		this.props.dispatch(incrementCounterBy5(index));
	}

	decrement(by, index) {
		this.props.dispatch(decrementCounter(by, index));
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
					<Button style={{marginLeft: '20px'}} onClick={this.addNewCounter} color="primary" variant="contained">Add Counter</Button>
					{
						this.props.count.map((elem, index)=>{
							return (
								<div className="counter-app" key={index}>
								<h1>{elem}</h1>
								<button onClick={()=>{this.increment(index)}} type="button" className="btn btn-primary">+ by 1</button>
								<button onClick={()=>{this.incrementBy2(index)}} type="button" className="btn btn-primary m10">+ by 2</button>
								<button onClick={()=>{this.incrementBy3(index)}} type="button" className="btn btn-primary m10">+ by 3</button>
								<button onClick={()=>{this.incrementBy4(index)}} type="button" className="btn btn-primary m10">+ by 4</button>
								<button onClick={()=>{this.incrementBy5(index)}} type="button" className="btn btn-primary m10">+ by 5</button>

								<button onClick={()=>{this.decrement(1, index)}} type="button" className="btn btn-info">- by 1</button>
								<button onClick={()=>{this.decrement(2, index)}} type="button" className="btn btn-info m10"  >- by 2</button>
								<button onClick={()=>{this.decrement(3, index)}} type="button" className="btn btn-info m10"  >- by 3</button>
								<button onClick={()=>{this.decrement(4, index)}} type="button" className="btn btn-info m10"  >- by 4</button>
								<button onClick={()=>{this.boundActionCreators.decrementCounter(5, index)}} type="button" className="btn btn-info m10"  >- by 5</button>

								<button onClick={()=>{this.remove(index)}} type="button" className="btn btn-danger m10">Remove Counter</button>
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