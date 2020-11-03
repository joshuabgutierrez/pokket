import { Typography } from '@material-ui/core';
import React from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';
import Transaction from './Transaction';
import styled from 'styled-components';

const TransactionsContainer = styled.div`
	background-color: #4357ad;
	color: #fff;
	padding: 1em 2em;
	max-width: 370px;
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
			</section>
		</TransactionsContainer>
	);
}

export default Transactions;
