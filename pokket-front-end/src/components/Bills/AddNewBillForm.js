import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

function AddNewBillForm() {
	return (
		<React.Fragment>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Typography variant="h6">Add your new bill</Typography>
				</Grid>
				<Grid item xs={12}>
					<form action="">
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<Grid container spacing={3}>
									<Grid item xs={12} md={6}>
										<TextField
											fullWidth
											id="name"
											label="Name of transaction"
											value="6-month Car Insurance Renewal"
											type="text"
										/>
									</Grid>
									<Grid item xs={12} sm={12} md={6} lg={6}>
										<TextField fullWidth id="amount" label="Amount" value={600} type="number" />
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								<Grid container spacing={3}>
									<Grid item xs={12} sm={12} md={6} lg={6}>
										<MuiPickersUtilsProvider utils={DateFnsUtils}>
											<KeyboardDatePicker
												label="Due Date"
												fullWidth
												clearable
												value={new Date()}
												placeholder="10/15/2021"
												minDate={new Date()}
												format="MM/dd/yyyy"
											/>
										</MuiPickersUtilsProvider>
									</Grid>
									<Grid item xs={12} sm={12} md={6} lg={6}>
										<TextField
											fullWidth
											id="payment_receiver"
											label="Payment Receiver"
											value="Aggressive Insurance"
										/>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								<Grid container spacing={3}>
									<Grid item xs={12} sm={12} md={6} lg={6}>
										<FormControl fullWidth>
											<InputLabel id="category">Category</InputLabel>
											<Select
												labelId="category_label"
												id="category_label"
												value="Auto & Transport"
											>
												<MenuItem value="Auto & Transport">Auto & Transport</MenuItem>
												<MenuItem value="Bills & Utilities">Bills & Utilities</MenuItem>
												<MenuItem value="Food & Dining">Food & Dining</MenuItem>
											</Select>
										</FormControl>
									</Grid>
									<Grid item xs={12} sm={12} md={6} lg={6}>
										<FormControl fullWidth>
											<InputLabel id="subcategory">Subcategory</InputLabel>
											<Select
												labelId="subcategory_label"
												id="subcategory_label"
												value="Auto Insurance"
											>
												<MenuItem value="Auto Insurance">Auto Insurance</MenuItem>
												<MenuItem value="Groceries">Groceries</MenuItem>
												<MenuItem value="Parking">Parking</MenuItem>
											</Select>
										</FormControl>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								<Button variant="contained" size="small">
									Add
								</Button>
							</Grid>
						</Grid>
					</form>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

export default AddNewBillForm;
