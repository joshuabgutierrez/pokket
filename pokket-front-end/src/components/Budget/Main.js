import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import BudgetList from './BudgetList';

function Main() {
	return (
		<div>
			<Grid container spacing={8}>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<Grid container justify="space-between">
						<Grid item xs={4} sm={3} md={2} lg={2}>
							<Typography variant="h6">Your budgets</Typography>
						</Grid>
						<Grid item xs={4} sm={3} md={2} lg={2}>
							<Button variant="contained" size="small">
								Create Budget
							</Button>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<BudgetList />
				</Grid>
			</Grid>
		</div>
	);
}

export default Main;
