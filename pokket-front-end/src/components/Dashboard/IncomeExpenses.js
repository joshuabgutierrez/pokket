import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import IncomeExpensesChart from '../../charts/IncomeExpensesChart';

const Container = styled.div`
	border: 2px solid #000;
	padding: 1em;
`;

function IncomeExpenses() {
	return (
		<Container>
			<header>
				<Typography variant="h6">Income and Expenses</Typography>
			</header>
			<main>
				<IncomeExpensesChart />
			</main>
		</Container>
	);
}

export default IncomeExpenses;
