import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import BudgetList from './BudgetList';
import BudgetModal from './BudgetModal';

function Main() {
	const [ open, setOpen ] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Grid container spacing={8}>
				<Grid item xs={12}>
					<Grid container justify="space-between">
						<Grid item xs={4} sm={3} md={2}>
							<Typography variant="h6">Your budgets</Typography>
						</Grid>
						<Grid item xs={4} sm={3} md={2}>
							<Button variant="contained" size="small" onClick={handleOpen}>
								Create Budget
							</Button>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<BudgetList />
				</Grid>
			</Grid>
			<BudgetModal handleClose={handleClose} open={open} />
		</div>
	);
}

export default Main;
