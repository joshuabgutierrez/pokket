import { Grid } from '@material-ui/core';
import React from 'react';
import GoalDetails from './GoalDetails';

function GoalsSection() {
	return (
		<Grid container justify="center">
			<Grid item xs={12} md={10}>
				<GoalDetails />
				<GoalDetails />
				<GoalDetails />
			</Grid>
		</Grid>
	);
}

export default GoalsSection;
