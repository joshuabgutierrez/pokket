import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
import TransactionsTable from './TransactionsTable';
import AddTransactionModal from './AddTransactionModal';
import UpdateTransactionModal from './UpdateTransactionModal';
import AlertMessage from '../Messages/AlertMessage';

function Main() {
	const [ addOpen, setAddOpen ] = useState(false);
	const [ updateOpen, setUpdateOpen ] = useState(false);
	const [ showAlert, setShowAlert ] = useState(false);

	const handleAddOpen = () => {
		setAddOpen(true);
	};
	const handleUpdateOpen = () => {
		setUpdateOpen(true);
	};

	const handleAddClose = () => {
		setAddOpen(false);
	};
	const handleUpdateClose = () => {
		setUpdateOpen(false);
	};

	const handleOpenShowAlertOpen = () => {
		setShowAlert(true);
	};

	const handleCloseAlertOpen = () => {
		setShowAlert(false);
	};

	return (
		<div>
			<Grid container spacing={5}>
				<Grid item xs={12}>
					<Grid container justify="space-between">
						<Grid item xs={6} sm={4} md={2} lg={2}>
							<Typography variant="h6">Transactions</Typography>
						</Grid>
						<Grid item xs={6} sm={4} md={2} lg={2}>
							<Button variant="contained" size="small" onClick={handleAddOpen}>
								Add Transaction
							</Button>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<TransactionsTable handleOpen={handleUpdateOpen} handleOpenAlert={handleOpenShowAlertOpen} />
				</Grid>
			</Grid>
			<AddTransactionModal open={addOpen} handleOpen={handleAddOpen} handleClose={handleAddClose} />
			<UpdateTransactionModal open={updateOpen} handleOpen={handleUpdateOpen} handleClose={handleUpdateClose} />
			<AlertMessage open={showAlert} handleClose={handleCloseAlertOpen} />
		</div>
	);
}

export default Main;
