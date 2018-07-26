import React from 'react';


export default class UserDetails extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			user: {},
		}
		this.setState = this.setState.bind(this);
	}

	componentDidMount() {
		let userId = this.props.match.params.id;
		fetch(`https://swapi.co/api/people/${userId}/`)
		.then((res)=>{
			return res.json();
		}, function(error){
			console.log(error);
		}).then((user)=>{
			this.setState({user});
		});
	}

	render() {
		let u = this.state.user;
		return (
			<div>
				<h1>User Details</h1>
				<hr/>
				
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm 6">
							<div>
								<h2>{u.name}</h2>
							</div>
							<div>Height:  {u.height}</div>
							<div>mass:  {u.mass}</div>
							<div>hair_color:  {u.hair_color}</div>
							<div>skin_color:  {u.skin_color}</div>
							<div> {u.eye_color}</div>
							<div> {u.birth_year}</div>
							<div> {u.gender}</div>
							<div> {u.homeworld}</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}