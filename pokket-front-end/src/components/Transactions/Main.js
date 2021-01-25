import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
import TransactionsTable from './TransactionsTable';
import TransactionsModal from './TransactionsModal';

function Main() {
	const [ open, setOpen ] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div>
			<Grid container spacing={5}>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<Grid container justify="space-between">
						<Grid item xs={6} sm={4} md={2} lg={2}>
							<Typography variant="h6">Transactions</Typography>
						</Grid>
						<Grid item xs={6} sm={4} md={2} lg={2}>
							<Button variant="contained" size="small" onClick={handleOpen}>
								Add Transaction
							</Button>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<TransactionsTable />
				</Grid>
			</Grid>
			<TransactionsModal open={open} handleOpen={handleOpen} handleClose={handleClose} />
		</div>
	);
}

export default Main;
