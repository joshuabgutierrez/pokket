import React from 'react';
import { HiArrowNarrowUp } from 'react-icons/hi';
import { HiArrowNarrowDown } from 'react-icons/hi';
import styled from 'styled-components';
import MoneyProgress from './MoneyProgress';
import Typography from '@material-ui/core/Typography';

const RevenueMain = styled.main`
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-align: left;
`;

const RevenueFooter = styled.footer`
	display: flex;

	& div:first-child {
		margin-right: 1em;
	}
`;

const Price = styled.span`font-size: 1.8rem;`;

function RevenueSavingsContent() {
	return (
		<React.Fragment>
			<header>
				<Typography variant="subtitle1" align="left">
					Revenue
				</Typography>
			</header>
			<RevenueMain>
				<div>
					<p>Last Week</p>
					<Price>$1,500.00</Price>
				</div>
				<MoneyProgress />
			</RevenueMain>
			<RevenueFooter>
				<div>
					<HiArrowNarrowUp />
					<span>35% Usages</span>
				</div>
				<div>
					<HiArrowNarrowDown />
					<span>65% Remaining</span>
				</div>
			</RevenueFooter>
		</React.Fragment>
	);
}

export default RevenueSavingsContent;
