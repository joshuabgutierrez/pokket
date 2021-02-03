import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddBudgetForm from './AddBudgetForm';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import useStyles from '../../theme/ModalComponentStyles';

export default function BudgetModal({ handleClose, open }) {
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
						<Grid container>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								<Typography variant="h6">Add a new budget</Typography>
							</Grid>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								<AddBudgetForm />
							</Grid>
						</Grid>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}
