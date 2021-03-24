import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
	constructor() {
		//we need to define super() at the beginning of the 
		//contructor to have access to 'this'
		super();

		//Here we initialize our local state as an object
		this.state = {
			name: 'Carlos'
		};
	}

	componentDidMount(){
		setTimeout(() => {
			this.setState({
				name:'Miguel'
			});
		},1000);
	}

	render() {
		console.log('Name: ',this.state.name);

		return(
			<div className="Home">
				<p>Hi my name is {this.state.name}</p>
			</div>
		);
	}
}

export default Home;
