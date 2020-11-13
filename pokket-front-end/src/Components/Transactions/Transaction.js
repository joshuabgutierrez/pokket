import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const TransactionItem = styled(ListItem)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0;
    margin: 0.9em 0;
`;

function Transaction() {
	return (
		<TransactionItem>
			<div
				style={{
					display: 'flex',
					alignItems: 'center'
				}}
			>
				<ListItemAvatar>
					<Avatar
						alt="Starbucks"
						src="https://images.unsplash.com/photo-1565692936545-c23bd329340a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
					/>
				</ListItemAvatar>
				<ListItemText primary="Starbucks Coffee" secondary="October 30, 2020" />
			</div>
			<span>$100</span>
		</TransactionItem>
	);
}

export default Transaction;
