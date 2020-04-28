import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
// We can have more than one Api, so we should give it a more descriptive name.
import { getCardDetails } from './cardDetailsApi';
import styles from './styles';

class QuestionTwo extends Component {

	/* The initial state can be set outside of the constructor.
	Since we are only setting the initial state we don't need a constructor. */
	state = {
		title: null,
		imgSrc: null,
		body: "",
		loading: true,
		error: null
	};

	/* API calls should be made from x not the constructor
	   https://reactjs.org/docs/react-component.html#componentdidmount */
	async componentDidMount() {
		/* getCardDetails is a function we want to execute it and use then to await the promise result.
		   So we must call it like a function().

		   The newer async await syntax can also be used, but this is more of a personal preference. */
		const cardDetails = await getCardDetails();

		/* We should handle error responses. */
		if (cardDetails instanceof Error) {
			this.setState({ error: "An error occured" })
		}

		// Cleaner syntax for setting the state.
		this.setState({
			...cardDetails,
			loading: false,
			error: null
		});
	}

	render() {
		const { classes } = this.props;
		const { title, imgSrc, body, loading } = this.state;

		if (loading) {
			return (
				<div className={classes.spinner}>
					<CircularProgress />
				</div>
			);
		}

		// We should make a component for this and make it look better, we also don't really want to show a user a stack trace.
		if (this.state.error) {
			return (
				<div className={classes.container}>
					An error occured
				</div>
			);
		}

		return (
			<div className={classes.container}>
				<Card className={classes.card}>
					<CardMedia
						className={classes.media}
						image={imgSrc}
						title={title}
					/>
					<CardContent className={classes.content}>
						<Typography gutterBottom variant="h5" component="h2">
							{title}
						</Typography>
						<div
							className={classes.body}
							/* Not a great idea, the API should not be concerned with the presentation layer.
								That is the job for React, imagine if we want to use this API for a react native project too.
								Then we will have an issue since those DOM elements are meaningless.

								This is a bad practice to use the `dangerouslySetInnerHTML` feature. But since this content is not coming from end users
								we do not need to worry about cross site scripting (XSS) attacks.
							  */
							dangerouslySetInnerHTML={{ __html: body }}
						/>
					</CardContent>
				</Card>
			</div>
		);
	}
}

const styledQuestionTwo = withStyles(styles)(QuestionTwo);
export {styledQuestionTwo as QuestionTwo};
