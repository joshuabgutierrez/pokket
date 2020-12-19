import {
	Button,
	FormControl,
	Grid,
	InputAdornment,
	InputLabel,
	makeStyles,
	MenuItem,
	Select,
	TextField
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import axios from 'axios';
import { Controller, useFormContext } from 'react-hook-form';

const useStyles = makeStyles({
	root: {
		width: '210px'
	},
	toCapitalize: {
		textTransform: 'capitalize'
	},
	alertStyles: {
		width: '210px',
		padding: '0 5px',
		marginBottom: '1em'
	}
});

function TransactionForm({ onSubmit, errors }) {
	const { register } = useFormContext();
	const [ categories, setCategories ] = useState([]);

	// Get categories from database
	useEffect(() => {
		async function getCategories() {
			const categories = await axios('http://localhost:1337/categories');
			setCategories(categories.data);
		}
		getCategories();
	}, []);

	const classes = useStyles();
	return (
		<form onSubmit={onSubmit}>
			<Grid container spacing={2} alignItems="center">
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<TextField
						name="description"
						label="Description"
						variant="outlined"
						size="small"
						inputRef={register({ required: 'Description is required' })}
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<TextField
						type="number"
						name="amount"
						label="Amount"
						InputProps={{
							startAdornment: <InputAdornment position="start">$</InputAdornment>
						}}
						variant="outlined"
						size="small"
						className={classes.root}
						inputRef={register({ required: 'Amount is required' })}
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<TextField
						name="location"
						label="Location"
						variant="outlined"
						size="small"
						inputRef={register({ required: 'Location is required' })}
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<FormControl size="small" className={classes.root}>
						<InputLabel>Category</InputLabel>
						<Controller
							name="category"
							defaultValue=""
							rules={{ required: 'Select a category' }}
							render={({ onChange, value }) => (
								<Select
									className={classes.root}
									value={value}
									onChange={(e) => onChange(e.target.value)}
								>
									{categories.map((category) => (
										<MenuItem
											key={category.id}
											value={category.id}
											className={classes.toCapitalize}
										>
											{category.name}
										</MenuItem>
									))}
								</Select>
							)}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<Controller
							defaultValue={new Date()}
							name="date"
							render={({ value, onChange }) => (
								<DatePicker
									label="Transaction Date"
									value={value}
									onChange={(date) => onChange(date)}
									animateYearScrolling
								/>
							)}
						/>
					</MuiPickersUtilsProvider>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<Button size="small" variant="contained" type="submit">
						Submit
					</Button>
				</Grid>
			</Grid>
		</form>
	);
}

export default TransactionForm;
