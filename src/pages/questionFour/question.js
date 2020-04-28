import React from 'react'
import Typography from "@material-ui/core/Typography";
import {CardMedia} from "@material-ui/core";
import kobayashiMaru from "./images/kobayashiMaru.jpg";

const question = ()=>{
	return (
		<div>
			<Typography variant="h4" gutterBottom>
				Question Four
			</Typography>
			<Typography variant="h5" gutterBottom>
				Kobayashi Maru
			</Typography>
			<Typography variant="body1" gutterBottom>
				Kirk solves the unsolvable by changing the rules, this is your chance to show us how you would solve your own Kobayashi Maru.
			</Typography>
			<Typography variant="body1" gutterBottom>
				Your task if you choose to accept it, is to write your own test and create a challenge for us to solve!
			</Typography>
			<Typography variant="body1" gutterBottom>
				Ideally it would be written as a bug, but the complexity and requirements are up to you. So 'show us what you got'!
			</Typography>
			<CardMedia
				image={kobayashiMaru}
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