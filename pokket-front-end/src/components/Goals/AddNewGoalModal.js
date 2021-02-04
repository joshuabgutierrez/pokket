import React from 'react';
import { Backdrop, Fade, Modal, Typography } from '@material-ui/core';
import useStyles from '../../theme/ModalComponentStyles';
import AddNewGoalForm from './AddNewGoalForm';

function AddNewGoalModal({ open, handleClose }) {
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
						<Typography variant="h6">Add New Goal</Typography>
						<AddNewGoalForm className={classes.paper} />
					</div>
				</Fade>
			</Modal>
		</div>
	);
}

export default AddNewGoalModal;
