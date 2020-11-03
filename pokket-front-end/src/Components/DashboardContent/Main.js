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
			<Grid container spacing={1}>
				<Grid item md={12}>
					<Grid container>
						<Grid item md={4}>
							<Balance />
						</Grid>
						<Grid item md={4}>
							<Revenue />
						</Grid>
						<Grid item md={4}>
							<Savings />
						</Grid>
					</Grid>
				</Grid>
				<Grid item md={12} />
				<Grid item md={12} />

				<Grid item md={4}>
					<Categories />
				</Grid>
				<Grid item md={4}>
					<Frequency />
					<ExpensesChart />
				</Grid>
				<Grid item md={4}>
					<Transactions />
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

export default Main;
