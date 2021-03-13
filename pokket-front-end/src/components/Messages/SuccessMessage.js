import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export default function SuccessMessage() {
	const [ open, setOpen ] = useState(true);

	return (
		<React.Fragment>
			<Snackbar
				anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
				open={open}
				autoHideDuration={6000}
				onClose={() => setOpen(true)}
			>
				<Alert onClose={() => setOpen(false)} severity="success" variant="filled">
					Transaction added successfully
				</Alert>
			</Snackbar>
		</React.Fragment>
	);
}
