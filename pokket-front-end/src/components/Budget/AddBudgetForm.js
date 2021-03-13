import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import TextField from '@material-ui/core/TextField';

function AddBudgetForm() {
	return (
		<form>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<FormControl fullWidth>
						<InputLabel id="budget_category">Category</InputLabel>
						<Select labelId="budget_category" id="budget_category">
							<MenuItem value="Entertaining">Entertaining</MenuItem>
							<MenuItem value="Personal Care">Personal Care</MenuItem>
							<MenuItem value="Auto & Transportation">Auto & Transportation</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<FormControl fullWidth>
						<InputLabel id="budget_subcategory">Subcategory</InputLabel>
						<Select labelId="budget_subcategory" id="budget_subcategory">
							<MenuItem value="Gym Membership">Gym Membership</MenuItem>
							<MenuItem value="Groceries">Groceries</MenuItem>
							<MenuItem value="Gas">Gas</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<TextField id="amount_limit" label="amount_limit" fullWidth />
				</Grid>
				<Grid item xs={12}>
					<Button fullWidth size="small" variant="contained" color="primary">
						Create
					</Button>
				</Grid>
			</Grid>
		</form>
	);
}

export default AddBudgetForm;
