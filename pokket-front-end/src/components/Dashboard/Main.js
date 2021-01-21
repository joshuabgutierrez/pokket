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
				<Grid item lg={12}>
					<Header />
				</Grid>
				<Grid item lg={12}>
					<Grid container spacing={3}>
						<Grid item lg={4}>
							<Categories />
						</Grid>
						<Grid item lg={4}>
							<Grid container spacing={6}>
								<Grid item lg={12}>
									<Details />
								</Grid>
								<Grid item lg={12}>
									<Details />
								</Grid>
							</Grid>
						</Grid>
						<Grid item lg={4}>
							<Transactions />
						</Grid>
					</Grid>
				</Grid>
				<Grid item lg={12}>
					<Grid container spacing={4}>
						<Grid item lg={6}>
							<IncomeExpenses />
						</Grid>
						<Grid item lg={6}>
							<CategoriesSummary />
						</Grid>
					</Grid>
				</Grid>
				<Grid item lg={12}>
					<Grid container spacing={3}>
						<Grid item lg={12}>
							<Typography variant="h6">Upcoming Payments</Typography>
						</Grid>
						<Grid item lg={12}>
							<Grid container spacing={4}>
								<Grid item lg={4}>
									<BillDetails />
								</Grid>
								<Grid item lg={4}>
									<BillDetails />
								</Grid>
								<Grid item lg={4}>
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
