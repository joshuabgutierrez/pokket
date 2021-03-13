import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertMessage({ open, handleClose }) {
	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">Are you sure you want to remove this transaction?</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						You will not be able to recover this transaction after deletion
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary" size="small">
						Cancel
					</Button>
					<Button onClick={handleClose} color="primary" variant="contained" size="small">
						Agree
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
