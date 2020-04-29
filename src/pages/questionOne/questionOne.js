/* Inconsistent use of single and double quotes. Use one or the other. */
import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class QuestionOne extends Component {

	/* The initial state can be set outside of the constructor.
	   Since we are only setting the initial state we don't need a constructor. */
	state = {
		counter: 0
	};

	/* handleOnClick does not need to be recreated in the render method scope each time it is called.
	Instead, we should define it within the class so that handleOnClick is only assigned once. */
	handleOnClick = () => {
		this.setState({
			counter: this.state.counter + 1
		})
	};

	render() {
		return (
			/* Avoid inline styles, one property is okay but when you get to 2-3 it makes the readability difficult.
			   It is better to stick to one approach and hence you should never use inline styles. Accept for testing,
			   even that is best done directly in the developer tools of your browser.
			*/
			<div style={{marginTop: 48}}>
				{/* onClick needs a function not a function call, otherwise handleOnClick will be triggered on render.
					This causes the state to change which in turn causes another render. Hence an infinte loop.
				*/}
				<Button variant="contained" onClick={this.handleOnClick}>
					{/* The label never changes and does not need to be stored in state. */}
					I've been clicked: {this.state.counter} times
				</Button>
			</div>
		)
	}
}

/* Default exports should be avoided, since the import reference can be mnamed anything.
   This makes it difficult to refactor the code.

   Inconsistent use of ; should either be present or not. Conventions should be followed and enforced through a linter e.g. eslint
   */
export { QuestionOne };