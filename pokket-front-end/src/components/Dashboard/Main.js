import { Grid } from '@material-ui/core';
import React from 'react';
import Categories from './Categories';
import CategoriesSummary from './CategoriesSummary';
import Details from './Details';
import Header from './Header';
import IncomeExpenses from './IncomeExpenses';
import Transactions from './Transactions';
import Typography from '@material-ui/core/Typography';
import BillDetails from './BillDetails';

function Main() {
	return (
		<div>
			<Grid container spacing={6}>
				<Grid item xs={12}>
					<Header />
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={6} md={4}>
							<Categories />
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Grid container spacing={6}>
								<Grid item xs={12}>
									<Details type="Total Expenses" today={125} weekly={940} />
								</Grid>
								<Grid item xs={12}>
									<Details type="Frequency of Transactions" today={7.1} weekly={51.0} />
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Transactions />
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={4}>
						<Grid item xs={12} md={6}>
							<IncomeExpenses />
						</Grid>
						<Grid item xs={12} md={6}>
							<CategoriesSummary />
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Typography variant="h6">Upcoming Payments</Typography>
						</Grid>
						<Grid item xs={12}>
							<Grid container spacing={4}>
								<Grid item xs={12} sm={6} md={4}>
									<BillDetails />
								</Grid>
								<Grid item xs={12} sm={6} md={4}>
									<BillDetails />
								</Grid>
								<Grid item xs={12} sm={6} md={4}>
									<BillDetails />
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default Main;
