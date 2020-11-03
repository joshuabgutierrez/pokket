import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const TransactionItem = styled(ListItem)`
    max-width: 400px;
    margin: 1em 0;
	display: flex;
	justify-content: space-between;
	padding: 0;
`;

function Transaction() {
	return (
		<TransactionItem>
			<ListItemAvatar>
				<Avatar
					alt="Starbucks"
					src="https://images.unsplash.com/photo-1565692936545-c23bd329340a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
				/>
			</ListItemAvatar>
			<ListItemText primary="Starbucks Coffee" secondary="October 30, 2020" />
			<span>$100</span>
		</TransactionItem>
	);
}

export default Transaction;
