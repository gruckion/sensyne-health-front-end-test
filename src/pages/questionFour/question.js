import React from 'react'
import Typography from "@material-ui/core/Typography";
import {CardMedia} from "@material-ui/core";
import Solution from "./images/solution.png";

const question = ()=>{
	return (
		<div>
			<Typography variant="h4" gutterBottom>
				Question Four
			</Typography>
			<Typography variant="h5" gutterBottom>
				Something for you
			</Typography>
			<Typography variant="body1" gutterBottom>
				For this question there are some re-rendering issues along with other minor bugs
			</Typography>
			<Typography variant="body1" gutterBottom>
				Your task if you choose to accept it, is to fix the counter to stop the unesscary re-renders.

				The list of random names should be clickable, when clicked they should be added to the list of selected names.
				A name cannot be added twice. You can assume all names are unique.
			</Typography>
			<Typography variant="body1" gutterBottom>
			As with all the questions in this tech test, you may or may not wish to refactor some of the code.
			</Typography>
			<CardMedia
				image={Solution}
				style={{
					width: '100%',
					height: 500,
					backgroundSize: 'contain',
				}}
				title="The Solution"
			/>
		</div>
	)
};

export default 	question