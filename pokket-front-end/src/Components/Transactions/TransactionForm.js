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
import React, { useEffect, useState } from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import axios from 'axios';

const useStyles = makeStyles({
	root: {
		width: '150px',
		margin: '0 auto'
	},
	toCapitalize: {
		textTransform: 'capitalize'
	}
});

function TransactionForm() {
	const [ categories, setCategories ] = useState([]);
	const [ category, setCategory ] = useState('');
	const [ selectedDate, setSelectedDate ] = useState(new Date());

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	useEffect(() => {
		async function getCategories() {
			const categories = await axios('http://localhost:1337/categories');
			setCategories(categories.data);
		}
		getCategories();
	}, []);

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
										{categories.map((category) => (
											<MenuItem
												key={category.id}
												value={category}
												className={classes.toCapitalize}
											>
												{category.name}
											</MenuItem>
										))}
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
