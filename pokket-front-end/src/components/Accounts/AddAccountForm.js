import { FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function AddAccountForm() {
	return (
		<React.Fragment>
			<Grid container>
				<Grid item xs={12}>
					<Typography variant="h6">Add(Link) your account</Typography>
				</Grid>
				<Grid item xs={12}>
					<form action="">
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Grid container spacing={3}>
									<Grid item xs={12} sm={6}>
										<TextField id="account_name" label="Account Name" value="Hard Work" fullWidth />
									</Grid>
									<Grid item xs={12} sm={6}>
										<TextField
											id="account_bank"
											label="Account Bank"
											value="Hells Fargo"
											fullWidth
										/>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12}>
								<Grid container spacing={3}>
									<Grid item xs={12} sm={6}>
										<TextField
											id="account_number"
											label="Account Number"
											value={1234567890}
											fullWidth
											type="number"
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<FormControl fullWidth>
											<InputLabel id="account_type_label">Account Type</InputLabel>
											<Select labelId="account_type_label" id="account_type">
												<MenuItem value="Checking Account">Checking Account</MenuItem>
												<MenuItem value="Savings Account">Savings Account</MenuItem>
												<MenuItem value="Cash">Cash</MenuItem>
											</Select>
										</FormControl>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12}>
								<Grid container alignItems="center" spacing={3}>
									<Grid item xs={12} sm={6}>
										<TextField
											id="account_balance"
											label="Account Balance"
											value="$0.00"
											fullWidth
											type="number"
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<Button variant="contained" size="small">
											Add
										</Button>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</form>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

export default AddAccountForm;
