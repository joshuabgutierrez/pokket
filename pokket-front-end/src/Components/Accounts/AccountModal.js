import { Backdrop, Fade, makeStyles, Modal } from '@material-ui/core';
import React, { useContext } from 'react';
import { ModalContext } from '../../Contexts/ModalContext';
import NewAccountForm from '../Accounts/NewAccountForm';

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

function AccountModal() {
	const classes = useStyles();
	const { isModalOpen, handleClose } = useContext(ModalContext);
	return (
		<React.Fragment>
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
						<h2 id="transition-modal-title">New Account</h2>
						<NewAccountForm />
					</div>
				</Fade>
			</Modal>
		</React.Fragment>
	);
}

export default AccountModal;
