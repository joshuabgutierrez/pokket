import React from 'react';
import { Backdrop, Fade, Modal } from '@material-ui/core';
import useStyles from '../../theme/ModalComponentStyles';
import AddAccountForm from './AddAccountForm';

function AddAccountModal({ open, handleClose }) {
	const classes = useStyles();
	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						<AddAccountForm />
					</div>
				</Fade>
			</Modal>
		</div>
	);
}

export default AddAccountModal;
