import React from "react";
import {connect} from 'react-redux';

import {MOVELEFT, MOVERIGHT} from '../actions/actions'

class Shift extends React.Component {

	constructor(props) {
		super(props);
		this.moveSelectedListRight = this.moveSelectedListRight.bind(this);
		this.moveSelectedListLeft = this.moveSelectedListLeft.bind(this);
		this.state = {
			list1Selected: [],
			list2Selected: []
		}
	}
	list1Selected(item) {
		this.setState({
			list1Selected: [...this.state.list1Selected, item]
		});
	}

	list2Selected(item) {
		this.setState({
			list2Selected: [...this.state.list2Selected, item]
		});
	}

	moveSelectedListRight() {
		this.props.dispatch({type: MOVERIGHT, items: this.state.list1Selected});
		this.setState({list1Selected: []});
	}

	moveSelectedListLeft() {
		this.props.dispatch({type: MOVELEFT, items: this.state.list2Selected});
		this.setState({list2Selected: []});
	}

	render() {
		return (
			<div className="row shift-container">
				<div className="col-12 col-sm-5">
					<div className="list-container">
						<ul>
							{
								this.props.items[0].map((elem, index, ar)=> {
									return (
										<li 
											onClick={()=>{this.list1Selected(elem.title)}} 
											key={index}
											className={this.state.list1Selected.indexOf(elem.title) > -1 ? 'selected' : ''}
										>
											<a>{elem.title}</a>
										</li>
									)
								})
							}
						</ul>
					</div>
				</div>
				<div onClick={this.moveSelectedListRight}> &lt; </div><br/>
				<div onClick={this.moveSelectedListLeft}> &gt; </div>
				<div className="col-12 col-sm-5">
					<div className="list-container">
						<ul>
							{
								this.props.items[1].map((elem, index, ar)=> {
									return (
										<li 
											onClick={()=>{this.list2Selected(elem.title)}} 
											key={index}
											className={this.state.list2Selected.indexOf(elem.title) > -1 ? 'selected' : ''}
										>
											<a>{elem.title}</a>
										</li>
									)
								})
							}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

const mapStatetoProps = (store) => { console.log(store.shiftItems.item);
	return {
		items: store.shiftItems.item
	}
}

export default connect(mapStatetoProps)(Shift);