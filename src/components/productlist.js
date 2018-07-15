import React from "react";
import { connect } from 'react-redux';

class ProductList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}

	addToCart(index) {
		console.log(index);
		this.props.dispatch({type: "ADD_TO_CART", index: index});
	}

	render() {
		console.log(this.props);
		//debugger;
		return (
			<div className="container">
				<div className="row">
				{
					this.props.products.products.map((product, index)=>{
						return (
					    	<div key={index} className="col-12 col-md-6 col-lg-4" style={{marginTop: '40px', marginBottom: '40px'}}>
			                    <div className="card">
			                        <img className="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap" />
			                        <div className="card-body">
			                            <h4 className="card-title"><a href="product.html" title="View Product">{product.title}</a></h4>
			                            <p className="card-text">{product.desc}</p>
			                            <div className="row">
			                                <div className="col">
			                                    <p className="btn btn-danger btn-block">99.00 $</p>
			                                </div>
			                                <div className="col">
			                                    <a href="#" onClick={(e)=> {e.preventDefault();this.addToCart(index)}} className="btn btn-success btn-block">Add to cart</a>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                </div>
					    )
					})
				}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		products: store.todo,
	}
}

export default connect(mapStateToProps)(ProductList);