import {
	FormControl,
	Grid,
	InputAdornment,
	InputLabel,
	makeStyles,
	MenuItem,
	OutlinedInput,
	Select
} from '@material-ui/core';
import React, { useState } from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles({
	root: {
		width: '150px',
		margin: '0 auto'
	}
});

function TransactionForm() {
	const [ category, setCategory ] = useState('');
	const [ selectedDate, setSelectedDate ] = useState(new Date());

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	const classes = useStyles();
	return (
		<div>
			<form noValidate autoComplete="off">
				<Grid container spacing={3}>
					<Grid item sm={12} md={12} ls={12}>
						<Grid container spacing={3}>
							<Grid item sm={6} md={6} ls={6}>
								<FormControl variant="outlined" size="small">
									<InputLabel htmlFor="description">Description</InputLabel>
									<OutlinedInput id="description" value="" label="Description" />
								</FormControl>
							</Grid>
							<Grid item sm={6} md={6} ls={6}>
								<FormControl variant="outlined" size="small">
									<InputLabel htmlFor="amount">Amount</InputLabel>
									<OutlinedInput
										id="amount"
										value=""
										label="Description"
										startAdornment={<InputAdornment position="start">$</InputAdornment>}
									/>
								</FormControl>
							</Grid>
						</Grid>
					</Grid>
					<Grid item sm={12} md={12} ls={12}>
						<Grid container spacing={3} alignItems="center">
							<Grid item sm={6} md={6} ls={6}>
								<FormControl size="small" className={classes.root}>
									<InputLabel>Category</InputLabel>
									<Select
										labelId="category"
										id="demo-simple-select"
										value={category}
										onChange={(e) => setCategory(e.target.value)}
									>
										<MenuItem value="Housing">Housing</MenuItem>
										<MenuItem value="Transportation">Transportation</MenuItem>
										<MenuItem value="Food">Food</MenuItem>
										<MenuItem value="Utilities">Utilities</MenuItem>
										<MenuItem value="Insurance">Insurance</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item sm={6} md={6} ls={6}>
								<MuiPickersUtilsProvider utils={DateFnsUtils}>
									<KeyboardDatePicker
										disableToolbar
										variant="inline"
										format="MM/dd/yyyy"
										margin="normal"
										id="date-picker-inline"
										label="Date"
										value={selectedDate}
										onChange={handleDateChange}
										KeyboardButtonProps={{
											'aria-label': 'change date'
										}}
									/>
								</MuiPickersUtilsProvider>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</form>
		</div>
	);
}

export default TransactionForm;
