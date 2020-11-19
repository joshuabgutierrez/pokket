import React, { useContext } from 'react';
import { Backdrop, Fade, makeStyles, Modal } from '@material-ui/core';
import { ModalContext } from '../../Contexts/ModalContext';
import BudgetForm from './BudgetForm';

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

function BudgetModal() {
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
						<BudgetForm />
					</div>
				</Fade>
			</Modal>
		</div>
	);
}

export default BudgetModal;
