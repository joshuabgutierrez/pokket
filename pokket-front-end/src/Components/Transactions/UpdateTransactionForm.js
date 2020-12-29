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
import React, { useContext, useEffect, useState } from 'react';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import axios from 'axios';
import { Controller, useFormContext } from 'react-hook-form';
import { TransactionsContext } from '../../Contexts/TransactionsContext';

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

function UpdateTransactionForm({ onSubmit, errors }) {
	const { register } = useFormContext();
	const { transactions, transactionsSelected, currentIndex, setCurrentIndex } = useContext(TransactionsContext);
	const [ categories, setCategories ] = useState([]);
	const [ areLoaded, setAreLoaded ] = useState(false);

	const transactionsToUpdate = transactionsSelected.rowIds.map((id) => {
		return transactions.transactions.find((transaction) => transaction.id === Number(id));
	});

	// Get categories from database
	useEffect(() => {
		async function getCategories() {
			const categories = await axios('http://localhost:1337/categories');
			setCategories(categories.data);
			setAreLoaded(true);
		}
		getCategories();
	}, []);

	const classes = useStyles();
	return (
		<React.Fragment>
			<form onSubmit={onSubmit}>
				<Grid container spacing={2} alignItems="center">
					<Grid item xs={12} sm={12} md={6} lg={6}>
						<TextField
							key={currentIndex}
							name="description"
							label="Description"
							variant="outlined"
							size="small"
							defaultValue={transactionsToUpdate[currentIndex].transaction_description}
							inputRef={register({ required: 'Description is required' })}
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={6} lg={6}>
						<TextField
							key={currentIndex}
							type="number"
							name="amount"
							label="Amount"
							defaultValue={transactionsToUpdate[currentIndex].transaction_amount}
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
							key={currentIndex}
							name="location"
							label="Location"
							variant="outlined"
							size="small"
							defaultValue={transactionsToUpdate[currentIndex].transaction_company}
							inputRef={register({ required: 'Location is required' })}
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={6} lg={6}>
						<FormControl size="small" className={classes.root}>
							<InputLabel>Category</InputLabel>
							{areLoaded ? (
								<Controller
									key={currentIndex}
									name="category"
									defaultValue={transactionsToUpdate[currentIndex].transaction_category.id}
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
							) : (
								<span>...</span>
							)}
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={12} md={6} lg={6}>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<Controller
								key={currentIndex}
								defaultValue={transactionsToUpdate[currentIndex].transaction_date}
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
						<Grid container spacing={3}>
							<Grid item>
								<Button size="small" variant="contained" type="submit">
									Update
								</Button>
							</Grid>
							{currentIndex < transactionsSelected.rowIds.length - 1 && (
								<Grid item>
									<Button
										size="small"
										variant="contained"
										color="secondary"
										onClick={() => setCurrentIndex(currentIndex + 1)}
									>
										Next
									</Button>
								</Grid>
							)}
						</Grid>
					</Grid>
				</Grid>
			</form>
		</React.Fragment>
	);
}

export default UpdateTransactionForm;
