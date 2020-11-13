import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import Header from './Header';
import Main from './Main';

const StyledDashboardContainer = styled.main`
	color: #000;
	height: calc(100vh - 3em);
	padding: 3em 5em;
	height: 110vh;

	h3 {
		margin: 0;
	}

	@media (max-width: 440px) {
		padding: 2em;
	}
`;

function DashboardContent() {
	return (
		<StyledDashboardContainer>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={12} md={12}>
					<Header />
				</Grid>
				<Grid item xs={12} sm={12} md={12}>
					<Main />
				</Grid>
				<Grid item sxs={12} m={12} md={12}>
					<h3>Upcoming Payments</h3>
				</Grid>
			</Grid>
		</StyledDashboardContainer>
	);
}

export default DashboardContent;
