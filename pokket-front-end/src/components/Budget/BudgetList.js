import React from 'react';
import { Grid } from '@material-ui/core';
import BudgetDetails from './BudgetDetails';

function BudgetList() {
	return (
		<React.Fragment>
			<Grid container spacing={4}>
				<Grid item xs={12} sm={10}>
					<BudgetDetails />
				</Grid>
				<Grid item xs={12} sm={10}>
					<BudgetDetails />
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

export default BudgetList;
