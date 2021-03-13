import React from 'react';
import { Grid, Input, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import Button from '@material-ui/core/Button';

function UpdateTransactionForm() {
	return (
		<React.Fragment>
			<Grid container spacing={3} zeroMinWidth>
				<Grid item xs={12}>
					<Typography variant="h6">Update your transaction here</Typography>
				</Grid>
				<Grid item xs={12}>
					<form action="">
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Grid container spacing={2} justify="space-between">
									<Grid item xs={12} sm={12} md={4} lg={4}>
										<TextField
											fullWidth
											id="transaction_name"
											label="Transaction"
											variant="outlined"
											size="small"
										/>
									</Grid>
									<Grid item xs={12} sm={12} md={4} lg={4}>
										<TextField
											fullWidth
											id="transaction_amount"
											label="Amount"
											variant="outlined"
											size="small"
										/>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12}>
								<Grid container justify="space-between">
									<Grid item xs={12} sm={12} md={4} lg={4}>
										<FormControl fullWidth>
											<InputLabel id="transaction_category_label">Category</InputLabel>
											<Select labelId="transaction_category" id="transaction_category">
												<MenuItem value="food & dining">Food & Dining</MenuItem>
												<MenuItem value="home">Home</MenuItem>
												<MenuItem value="personal care">Personal Care</MenuItem>
											</Select>
										</FormControl>
									</Grid>
									<Grid item xs={12} sm={12} md={4} lg={4}>
										<FormControl fullWidth>
											<InputLabel id="transaction_subcategory_label">Subcategory</InputLabel>
											<Select labelId="transaction_subcategory" id="transaction_subcategory">
												<MenuItem value="mortgage">Mortgage</MenuItem>
												<MenuItem value="water bill">Water Bill</MenuItem>
												<MenuItem value="gym membership">Gym Membership</MenuItem>
											</Select>
										</FormControl>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12}>
								<Grid container spacing={2} justify="space-between" alignItems="center">
									<Grid item xs={12} sm={12} md={4} lg={4}>
										<FormControl fullWidth>
											<InputLabel htmlFor="transaction_receiver">Receiver</InputLabel>
											<Input id="transaction_receiver" />
										</FormControl>
									</Grid>
									<Grid item xs={12} sm={12} md={4} lg={4}>
										<MuiPickersUtilsProvider utils={DateFnsUtils}>
											<KeyboardDatePicker
												fullWidth
												clearable
												value={new Date()}
												placeholder="10/15/2021"
												minDate={new Date()}
												format="MM/dd/yyyy"
											/>
										</MuiPickersUtilsProvider>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} sm={6} md={6} lg={6}>
								<Button variant="contained" size="small">
									Update Record
								</Button>
							</Grid>
						</Grid>
					</form>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

export default UpdateTransactionForm;
