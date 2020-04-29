import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(() => ({
	// Correct the DOM structure whilst still maintaining block display for the secondary content.
	container: {
		display: 'block'
	},
	header: {
		fontWeight: 'bold',
		display: 'inline',
		marginRight: 4,
	},
	label: {
		display: 'inline',
	},
}));


/* Switch to a functional component as an alternate solution to resolving the useStyles issue. */
const QuestionListItem = (props) => {
	const classes = useStyles();
	/* Correct component props and used double destructuring on the item prop  */
	const {
		item: { id, name, species, Icon, description },
		divider
	} = props;

	return (
		/* Inconsistent use of React Fragment, switch to React.Fragment out of preference. */
		<React.Fragment>
			<ListItem alignItems="flex-start" >
				<ListItemAvatar>
					<Avatar>
						<Icon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText
					primary={`${name}: ${species? species : 'Other'}`}
					secondary={
						<React.Fragment>
							{/* Switch to spans since p elements can only contain inline elements
								and placing a div inside a p tag force close the p tag which is not the
								intended behaviour.

								Once the DOM is parsed we can then apply the CSS to make the span as a block element.
								It's not possible to use the div and style that as block since the DOM would have already been
								processed at this point. */}
							<span className={classes.container}>
								<Typography
									// Switched to a span as both p and h6 cannot be a descendant of p
									component="span"
									variant="subtitle2"
									className={classes.header}
								>
									Description:
								</Typography>
								<Typography
									// Switched to a span as both p and h6 cannot be a descendant of p
									component="span"
									variant="body2"
									className={classes.label}
								>
									{description}
								</Typography>
							</span>
							<span>
								<Typography
									// Switched to a span as both p and h6 cannot be a descendant of p
									component="span"
									variant="subtitle2"
									className={classes.header}
								>
									Guid:
								</Typography>
								<Typography
									// Switched to a span as both p and h6 cannot be a descendant of p
									component="span"
									variant="body2"
									className={classes.label}
								>
									{id ? id : 'ERROR '}
								</Typography>
							</span>

						</React.Fragment>
					}
				/>
			</ListItem>
			{divider && <Divider variant="middle" />}
		</React.Fragment>
	);
}

export { QuestionListItem };