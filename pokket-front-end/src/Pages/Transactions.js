import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { BsPlus } from 'react-icons/bs';
import TransactionsTable from '../Components/Transactions/TransactionsTable';
import { ModalContext } from '../Contexts/ModalContext';
import TransactionsModal from '../Components/Transactions/TransactionsModal';

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
	const { handleOpen } = useContext(ModalContext);

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
							<Button variant="contained" size="small" className={classes.buttonWidth}>
								Edit Transaction
							</Button>
						</Grid>
						<Grid item lg={4}>
							<Button variant="contained" size="small" className={classes.buttonWidth}>
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
		</div>
	);
}

export default Transactions;
