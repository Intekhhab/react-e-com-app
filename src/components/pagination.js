import React from 'react';
import {connect} from 'react-redux';

class Pagination extends React.Component {

	constructor(props) {
		super(props);
		this.getPaginationHtml = this.getPaginationHtml.bind(this);
		this.setPagination = this.setPagination.bind(this);
	}

	setPagination(i) {
		this.props.setPagination(i);
	}

	getPaginationHtml() {
		let count = this.props.records;
		let currentPage = this.props.currentPage;
		let links = [];
		let end = 1;
		let start;
		if (count) {
			count = Math.ceil(count/10);
			start = (currentPage + 5) < count ? currentPage : (count - 5) ;
			end = (currentPage + 5) < count ? (currentPage + 5) : count; 

			links.push(<li 
				onClick={()=> {this.setPagination(currentPage - 1)}}
				className="page-item" key='0'><a className="page-link" href="#">Previous</a></li>);


			for (let i = start; i <= end; i++) {
				links.push(
					<li key={i}
					onClick={()=> {this.setPagination(i)}}
					className={currentPage == i ? 'page-item active' : 'page-item'}><a className="page-link" href="#">{i}</a></li>
				);
			}

			links.push(<li 
				onClick={()=> {this.setPagination(currentPage + 1)}}
				className="page-item" key='-1'><a className="page-link" href="#">Next</a></li>);
		}
		return links;
	}

	render() {
		return(
			<div className="container">
			  <ul className="pagination">
			    
			    {this.getPaginationHtml()}
			  </ul>
			</div>
		)
	}
}

export default connect(null)(Pagination);