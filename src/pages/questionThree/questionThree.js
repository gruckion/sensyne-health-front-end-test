import React, {Component} from 'react';
/* makeStyles returns a hook and cannot be used in a class component.
   We have two options here, switch to the withStyles HOC or refactor
   this component into a functional component, so we can use hooks.

   I have decided to do the formmer here and use the functional approach in
   `questionListItem` for variety. Normally I would choose functional components
   and hooks. */
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Android from "@material-ui/icons/Android";
import Pets from "@material-ui/icons/Pets";
import BugReport from "@material-ui/icons/BugReport";
/* switch to named exports */
import { QuestionListItem } from './questionListItem';
import { createRowData } from './mocks';

const createMockData = () => {
	/* Please do not refactor this function */
	return [
		createRowData({species: 'Robot', name: 'T-100', Icon: Android, description: "Likes long walks, walking over the bones of it's enemies"}),
		createRowData({species: 'Bug', name:'Barry', Icon: BugReport, description: "Likes long walks, and creating problems in all your code"}),
		createRowData({species: 'Rabbit', name:'Roger', Icon: Pets, description: "Likes long walks and getting to know the inner you"}),
		createRowData({species: null, name: null, Icon: null, description: null}),
	]
};

/* Switched to the non-hooks material ui styles */
const styles = {
	container:{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
	},
	root: {
		width: '100%',
	},
	inline: {
		display: 'inline',
	},
};

/* Using a named export means we need to change this class to upper case.
   As react components must start with a capital.
*/
class QuestionThree extends Component {
	render() {
		const { classes } = this.props;
		const mockData = createMockData();

		/* The order in the image is different to what I have and above on line 19 you
			have asked me not to edit that function. As Such I have adjusted the order here to match.

			`splice` will remove 1 element from the infex at length - 1 and return the value in an array.
			We then grab this element and `unshift` it to insert it at the front of the array.
		*/
		mockData.unshift(mockData.splice(mockData.length - 1, 1)[0]);

		return (
			<div className={classes.container}>
				<Paper>
						<List className={classes.root}>
							{mockData.map((item, i) => {
								return <QuestionListItem
									key={item.id}
									item={item}
									divider={i !== mockData.length -1}
								/>
							})}
						</List>
				</Paper>
			</div>
		);
	}
}

export default withStyles(styles)(QuestionThree);