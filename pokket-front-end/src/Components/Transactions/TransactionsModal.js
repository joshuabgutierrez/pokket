import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { ModalContext } from '../../Contexts/ModalContext';
import TransactionForm from './TransactionForm';
import Typography from '@material-ui/core/Typography';
import { FormProvider, useForm } from 'react-hook-form';
import { DateFormat } from '../../Utils/HelperMethods';
import { TransactionsContext } from '../../Contexts/TransactionsContext';
import UpdateTransactionForm from './UpdateTransactionForm';

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
	},
	spacing: {
		marginBottom: '0.5em'
	}
}));

export default function TransactionsModal() {
	const classes = useStyles();
	const { isModalOpen, handleClose, isUpdating } = useContext(ModalContext);
	const { addTransaction, updateTransaction, transactionsSelected, currentIndex } = useContext(TransactionsContext);

	// Handling Transaction form using FormContext to not make the form component larger
	const methods = useForm();

	// Add new transaction to database
	const onSubmit = (data) => {
		const newTransaction = {
			transaction_date: data.date,
			transaction_description: data.description,
			transaction_amount: Number(data.amount),
			transaction_category: data.category.toString(),
			transaction_company: data.location,
			user_id: '1'
		};

		if (!isUpdating) {
			addTransaction(newTransaction);
		} else {
			updateTransaction(newTransaction, transactionsSelected.rowIds[currentIndex]);
		}
	};

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
						<Typography variant="h5" className={classes.spacing}>
							Your transaction
						</Typography>
						<FormProvider {...methods}>
							{isUpdating ? (
								<UpdateTransactionForm
									onSubmit={methods.handleSubmit(onSubmit)}
									errors={methods.errors}
								/>
							) : (
								<TransactionForm onSubmit={methods.handleSubmit(onSubmit)} errors={methods.errors} />
							)}
						</FormProvider>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}
