import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import HorizontalCard from '../../Styles/HorizontalCard';

const BalanceHeader = styled.header`
	display: flex;
	justify-content: space-between;
	margin-bottom: 1em;
`;

const Price = styled.p`font-size: 1.5rem;`;

const CardNumber = styled.main`
	display: flex;
	justify-content: space-between;
	margin-bottom: 1em;
`;

const CardFooter = styled.footer`
	display: flex;
	justify-content: space-between;
`;

const LeftCardFooter = styled.div`text-align: left;`;
const RightCardFooter = styled.div`text-align: right;`;

const Balance = () => {
	return (
		<HorizontalCard>
			<BalanceHeader>
				<div>
					<Typography variant="body1">Current Balance</Typography>
					<Price>$8,200.90</Price>
				</div>
				<Typography variant="h4">VISA</Typography>
			</BalanceHeader>
			<CardNumber>
				<span>****</span>
				<span>****</span>
				<span>****</span>
				<span>2576</span>
			</CardNumber>
			<CardFooter>
				<LeftCardFooter>
					<p>CardHolder</p>
					<p>Mary Doe</p>
				</LeftCardFooter>
				<RightCardFooter>
					<p>Expires</p>
					<p>12/20</p>
				</RightCardFooter>
			</CardFooter>
		</HorizontalCard>
	);
};

export default Balance;
