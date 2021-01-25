import React from 'react';
import { Grid, Input, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import Button from '@material-ui/core/Button';

function AddTransactionForm() {
	return (
		<React.Fragment>
			<Grid container spacing={3} zeroMinWidth>
				<Grid item lg={12}>
					<Typography variant="h6">Add your new transaction here</Typography>
				</Grid>
				<Grid item lg={12}>
					<form action="">
						<Grid container spacing={3}>
							<Grid item lg={12}>
								<Grid container justify="space-between">
									<Grid item lg={4}>
										<TextField
											id="transaction_name"
											label="Transaction"
											variant="outlined"
											size="small"
										/>
									</Grid>
									<Grid item lg={4}>
										<TextField
											id="transaction_amount"
											label="Amount"
											variant="outlined"
											size="small"
										/>
									</Grid>
								</Grid>
							</Grid>
							<Grid item lg={12}>
								<Grid container justify="space-between">
									<Grid item lg={4}>
										<FormControl style={{ width: '100%' }}>
											<InputLabel id="transaction_category_label">Category</InputLabel>
											<Select labelId="transaction_category" id="transaction_category">
												<MenuItem value="food & dining">Food & Dining</MenuItem>
												<MenuItem value="home">Home</MenuItem>
												<MenuItem value="personal care">Personal Care</MenuItem>
											</Select>
										</FormControl>
									</Grid>
									<Grid item lg={4}>
										<FormControl style={{ width: '100%' }}>
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
							<Grid item lg={12}>
								<Grid container justify="space-between" alignItems="center">
									<Grid item lg={4}>
										<FormControl fullWidth>
											<InputLabel htmlFor="transaction_receiver">Receiver</InputLabel>
											<Input id="transaction_receiver" />
										</FormControl>
									</Grid>
									<Grid item lg={4}>
										<MuiPickersUtilsProvider utils={DateFnsUtils}>
											<KeyboardDatePicker
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
							<Grid item lg={6}>
								<Button variant="contained" size="small">
									Add Record
								</Button>
							</Grid>
						</Grid>
					</form>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

export default AddTransactionForm;
