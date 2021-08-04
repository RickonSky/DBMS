import React, {Component} from 'react';

class Count extends Component{
	state= {
		count: 0
	}
	adder = () => {
		this.setState({count:this.state.count+1});
	}
	render(){
		return(
			<div>
			<p> {this.state.count}</p>
			<button onClick={this.adder}> increase </button>
			</div>);

		


	}
}
export default Count;