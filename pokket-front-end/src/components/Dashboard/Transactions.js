import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { GrFormNext as NextIcon } from 'react-icons/gr';

// Styled-components
const TransactionsContainer = styled.div`
	border: 2px solid #000;
	border-radius: 5px;
	padding: 2em;
`;

const StyledTransaction = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1.85em;
`;

function Transactions() {
	return (
		<TransactionsContainer>
			<header>
				<Typography variant="h6">Recent Transactions</Typography>
			</header>
			<StyledTransaction>
				<Typography variant="subtitle1">Coffee in Starbucks</Typography>
				<NextIcon size={25} />
			</StyledTransaction>
			<StyledTransaction>
				<Typography variant="subtitle1">Fuel Car</Typography>
				<NextIcon size={25} />
			</StyledTransaction>
			<StyledTransaction>
				<Typography variant="subtitle1">ALDI groceries</Typography>
				<NextIcon size={25} />
			</StyledTransaction>
			<StyledTransaction>
				<Typography variant="subtitle1">Internet Bill</Typography>
				<NextIcon size={25} />
			</StyledTransaction>
			<StyledTransaction>
				<Typography variant="subtitle1">Rent</Typography>
				<NextIcon size={25} />
			</StyledTransaction>
			<StyledTransaction>
				<Typography variant="subtitle1">Phone Bill</Typography>
				<NextIcon size={25} />
			</StyledTransaction>
		</TransactionsContainer>
	);
}

export default Transactions;
