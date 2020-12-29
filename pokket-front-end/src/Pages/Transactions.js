import React, { useContext, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, makeStyles, Snackbar } from '@material-ui/core';
import { BsPlus } from 'react-icons/bs';
import TransactionsTable from '../Components/Transactions/TransactionsTable';
import { ModalContext } from '../Contexts/ModalContext';
import TransactionsModal from '../Components/Transactions/TransactionsModal';
import { TransactionsContext } from '../Contexts/TransactionsContext';
import Alert from '@material-ui/lab/Alert';

// Material UI styling
const useStyles = makeStyles({
	root: {
		marginTop: '2em'
	},
	buttonWidth: {
		width: '170px'
	}
});

function Transactions() {
	const classes = useStyles();
	const { handleOpen, handleIsUpdating, successMessageOpen, handleCloseOnSuccessMessage } = useContext(ModalContext);
	const { transactionsSelected, deleteTransaction } = useContext(TransactionsContext);
	const [ open, setOpen ] = useState(false);

	function handleEdit() {
		if (transactionsSelected === null || transactionsSelected.rowIds.length === 0) {
			return setOpen(true);
		}
		handleOpen();
		handleIsUpdating();
	}

	function handleDelete() {
		deleteTransaction(transactionsSelected.rowIds[0]);
	}

	return (
		<div>
			<Typography variant="h4" align="center">
				Transactions History
			</Typography>
			<Typography variant="subtitle1" align="center">
				You only have one account. These transactions are based on it
			</Typography>
			<Grid container justify="center" className={classes.root}>
				<Grid item lg={6}>
					<Grid container align="center" justify="center" spacing={2}>
						<Grid item lg={4}>
							<Button
								variant="contained"
								size="small"
								className={classes.buttonWidth}
								onClick={handleEdit}
							>
								Edit Transaction
							</Button>
						</Grid>
						<Grid item lg={4}>
							<Button
								variant="contained"
								size="small"
								className={classes.buttonWidth}
								onClick={handleDelete}
							>
								Delete Transaction
							</Button>
						</Grid>
						<Grid item lg={4}>
							<Button
								variant="outlined"
								size="small"
								className={classes.buttonWidth}
								startIcon={<BsPlus />}
								onClick={handleOpen}
							>
								Add Transaction
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid container className={classes.root}>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<TransactionsTable />
				</Grid>
			</Grid>
			<TransactionsModal />
			{/* Error message */}
			<Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={open}>
				<Alert severity="error" onClose={() => setOpen(false)}>
					Please, select a transaction
				</Alert>
			</Snackbar>
			{/* Success Message */}
			<Snackbar
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
				open={successMessageOpen}
				autoHideDuration={3000}
				onClose={handleCloseOnSuccessMessage}
			>
				<Alert onClose={handleCloseOnSuccessMessage} severity="success">
					Transaction saved successfully
				</Alert>
			</Snackbar>
		</div>
	);
}

export default Transactions;
