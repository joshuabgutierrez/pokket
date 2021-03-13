import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import Typography from '@material-ui/core/Typography';

function PayBillForm() {
	return (
		<React.Fragment>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant="h6">Payment Details:</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="subtitle1">Car Insurance</Typography>
					<Typography variant="subtitle1">$600</Typography>
					<Typography variant="subtitle2">Aggresive Insurance</Typography>
				</Grid>
				<Grid item xs={12}>
					<Grid container justify="space-between" alignItems="center" spacing={2}>
						<Grid item xs={12} lg={4}>
							<FormControl fullWidth>
								<InputLabel id="account">Select an account</InputLabel>
								<Select labelId="accounts" id="accounts">
									<MenuItem value="xxxxxxxx1234">xxxxxxxx1234</MenuItem>
									<MenuItem value="xxxxxxxx1234">xxxxxxxx1234</MenuItem>
									<MenuItem value="xxxxxxxx1234">xxxxxxxx1234</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={12} lg={4}>
							<Button variant="contained" size="small">
								Confirm Payment
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

export default PayBillForm;
