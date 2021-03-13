import React from 'react';
import {
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid,
	InputLabel,
	makeStyles,
	MenuItem,
	Radio,
	RadioGroup,
	Select
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	row: {
		display: 'flex',
		flexDirection: 'row',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column'
		}
	},
	margin: {
		marginBottom: '1em'
	}
}));

function AddNewGoalForm() {
	const classes = useStyles();
	return (
		<Grid container>
			<Grid item xs={12}>
				<form action="">
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Grid container spacing={3}>
								<Grid item xs={12} sm={6}>
									<TextField
										id="goal_name"
										label="Goal Name"
										value="Unfortunately pay off student loans"
										fullWidth
										type="text"
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										id="goal_total_amount"
										label="Total Amount"
										value="2000"
										fullWidth
										type="number"
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Grid container spacing={3}>
								<Grid item xs={12} sm={6}>
									<FormControl fullWidth>
										<InputLabel id="account_label">Choose an account</InputLabel>
										<Select labelId="account" id="account" value="xxx-xxx-xxx-123">
											<MenuItem value="xxx-xxx-xxx-123">xxx-xxx-xxx-123</MenuItem>
											<MenuItem value="xxx-xxx-xxx-345">xxx-xxx-xxx-345</MenuItem>
											<MenuItem value="xxx-xxx-xxx-390">xxx-xxx-xxx-390</MenuItem>
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={12} sm={6}>
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
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<FormControl component="fieldset">
								<FormLabel component="legend">How often do you want to add to your goal?</FormLabel>
								<RadioGroup aria-label="frequency" name="frequency" className={classes.row}>
									<FormControlLabel value="weekly" control={<Radio />} label="Every week" />
									<FormControlLabel value="biweekly" control={<Radio />} label="Every 2 weeks" />
									<FormControlLabel value="triweekly" control={<Radio />} label="Every 3 weeks" />
									<FormControlLabel value="monthly" control={<Radio />} label="Once a month" />
								</RadioGroup>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={8}>
							<FormControl>
								<FormLabel component="label" className={classes.margin}>
									How much do you want to add every week?
								</FormLabel>
								<TextField id="amount" value={2000} type="number" variant="outlined" size="small" />
							</FormControl>
						</Grid>
						<Grid item xs={12}>
							<Button variant="contained" size="small">
								Save
							</Button>
						</Grid>
					</Grid>
				</form>
			</Grid>
		</Grid>
	);
}

export default AddNewGoalForm;
