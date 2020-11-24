import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { BsPlus } from 'react-icons/bs';
import Goal from './Goal';
import NewGoalForm from './NewGoalForm';

const useStyles = makeStyles({
	root: {
		marginTop: '2em'
	},
	spacing: {
		textAlign: 'right'
	}
});

function Goals() {
	const classes = useStyles();

	return (
		<div>
			<Grid container>
				<Grid item lg={6}>
					<Typography variant="h6">Your budget goals</Typography>
				</Grid>
				<Grid item lg={6} className={classes.spacing}>
					<Button variant="contained" startIcon={<BsPlus />}>
						Add a goal
					</Button>
				</Grid>
				<Grid item lg={12} className={classes.root}>
					<Grid container spacing={4}>
						<Grid item lg={6}>
							<Goal />
						</Grid>
					</Grid>
				</Grid>
				<Grid item lg={6}>
					<NewGoalForm />
				</Grid>
			</Grid>
		</div>
	);
}

export default Goals;
