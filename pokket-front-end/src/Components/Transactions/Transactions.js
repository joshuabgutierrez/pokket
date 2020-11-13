import { Typography } from '@material-ui/core';
import React from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';
import Transaction from './Transaction';
import styled from 'styled-components';

const TransactionsContainer = styled.div`
	background-color: #007ee3;
	color: #fff;
	padding: 1em 2em;
	border-radius: 10px;
`;

const TransactionsHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

function Transactions() {
	return (
		<TransactionsContainer>
			<TransactionsHeader>
				<Typography variant="body1">History Transactions</Typography>
				<HiDotsHorizontal size="35" />
			</TransactionsHeader>
			<section>
				<Transaction />
				<Transaction />
				<Transaction />
				<Transaction />
				<Transaction />
			</section>
		</TransactionsContainer>
	);
}

export default Transactions;
