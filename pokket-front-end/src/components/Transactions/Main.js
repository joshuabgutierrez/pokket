import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import TransactionsTable from './TransactionsTable';

function Main() {
	return (
		<div>
			<Grid container spacing={3}>
				<Grid item lg={12}>
					<header>
						<Typography variant="h6">Transactions</Typography>
					</header>
				</Grid>
				<Grid item lg={12}>
					<TransactionsTable />
				</Grid>
			</Grid>
		</div>
	);
}

export default Main;
