import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class QuestionOne extends Component {
	constructor(props){
		super(props);
		this.state = {
			label: "I've been clicked: ",
			counter: 0
		}
	}
	render(){
		const handleOnClick = () =>{
			this.setState({
				counter: this.state.counter + 1
			})
		};
		return (
			<div style={{marginTop: 48}}>
				<Button variant="contained" onClick={handleOnClick()}  >
					{this.state.label} {this.state.counter} times
				</Button>
			</div>
		)
	}
}

export default QuestionOne