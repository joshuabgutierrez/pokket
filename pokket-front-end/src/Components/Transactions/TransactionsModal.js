import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { ModalContext } from '../../Contexts/ModalContext';
import TransactionForm from './TransactionForm';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		width: '50%'
	}
}));

export default function TransactionsModal() {
	const classes = useStyles();
	const { isModalOpen, handleClose } = useContext(ModalContext);

	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={isModalOpen}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500
				}}
			>
				<Fade in={isModalOpen}>
					<div className={classes.paper}>
						<Typography variant="h5">Add new transaction</Typography>
						<TransactionForm />
					</div>
				</Fade>
			</Modal>
		</div>
	);
}
