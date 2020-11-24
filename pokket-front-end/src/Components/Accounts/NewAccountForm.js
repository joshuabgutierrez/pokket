import React from 'react';
import { Button, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

function NewAccountForm() {
	return (
		<React.Fragment>
			<Grid container spacing={3}>
				<Grid item lg={6}>
					<TextField type="text" label="Card Name" />
				</Grid>
				<Grid item lg={6}>
					<TextField type="number" label="Account Number" />
				</Grid>
				<Grid item lg={6}>
					<TextField type="number" label="Card Number" />
				</Grid>
				<Grid item lg={6}>
					<TextField type="text" label="Card Holder" />
				</Grid>
				<Grid item lg={6}>
					<TextField type="text" label="Expiration Date" />
				</Grid>
				<Grid item lg={6}>
					<TextField type="number" label="Available Amount" />
				</Grid>
				<Grid item lg={6}>
					<Button variant="contained" size="small">
						Submit
					</Button>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

export default NewAccountForm;
