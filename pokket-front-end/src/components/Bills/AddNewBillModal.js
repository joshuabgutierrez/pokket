import React from 'react';
import { Backdrop, Fade, Modal } from '@material-ui/core';
import useStyles from '../../theme/ModalComponentStyles';
import AddNewBillForm from './AddNewBillForm';

function AddNewBillModal({ openAddNewBillModal, handleCloseAddNewBillModal }) {
	const classes = useStyles();
	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={openAddNewBillModal}
				onClose={handleCloseAddNewBillModal}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500
				}}
			>
				<Fade in={openAddNewBillModal}>
					<div className={classes.paper}>
						<AddNewBillForm className={classes.paper} />
					</div>
				</Fade>
			</Modal>
		</div>
	);
}

export default AddNewBillModal;
