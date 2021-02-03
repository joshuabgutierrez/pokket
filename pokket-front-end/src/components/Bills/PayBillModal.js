import React from 'react';
import { Backdrop, Fade, Modal } from '@material-ui/core';
import useStyles from '../../theme/ModalComponentStyles';
import PayBillForm from './PayBillForm';

function PayBillModal({ openPayBillModal, handleClosePayBillModal }) {
	const classes = useStyles();

	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={openPayBillModal}
				onClose={handleClosePayBillModal}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500
				}}
			>
				<Fade in={openPayBillModal}>
					<div className={classes.paper}>
						<PayBillForm className={classes.paper} />
					</div>
				</Fade>
			</Modal>
		</div>
	);
}

export default PayBillModal;
