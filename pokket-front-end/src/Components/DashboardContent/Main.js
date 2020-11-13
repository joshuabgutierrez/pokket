import { Grid } from '@material-ui/core';
import React from 'react';
import Balance from './Balance';
import Categories from '../Categories/Categories';
import Revenue from '../Revenue/Revenue';
import Savings from '../Savings/Savings';
import Transactions from '../Transactions/Transactions';
import Frequency from '../Frequency/Frequency';
import ExpensesChart from '../../Charts/ExpensesChart';

function Main() {
	return (
		<React.Fragment>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={12} md={12}>
					<Grid container spacing={4}>
						<Grid item xs={12} sm={12} md={12} lg={4}>
							<Balance />
						</Grid>
						<Grid item xs={12} sm={12} md={6} lg={4}>
							<Revenue />
						</Grid>
						<Grid item xs={12} sm={12} md={6} lg={4}>
							<Savings />
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={12} md={12}>
					<Grid container spacing={4}>
						<Grid item xs={12} sm={12} md={6} lg={4}>
							<Categories />
						</Grid>
						<Grid item xs={12} sm={12} md={6} lg={4}>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={12} md={12} lg={12}>
									<ExpensesChart />
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={12}>
									<Frequency />
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} sm={12} md={6} lg={4}>
							<Transactions />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

export default Main;
