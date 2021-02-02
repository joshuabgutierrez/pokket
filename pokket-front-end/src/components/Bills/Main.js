import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import BillSection from './BillSection';

const StyledHeader = styled.header`
	text-align: center;
	width: 100%;
	max-width: 500px;
	margin: auto;
`;

function Main() {
	return (
		<div>
			<Grid container justify="center">
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<StyledHeader>
						<Typography variant="h6">Bills Due This Week</Typography>
						<Typography variant="h4">$563</Typography>
						<Typography variant="subtitle1">3 Bills</Typography>
					</StyledHeader>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<BillSection />
					<BillSection />
				</Grid>
			</Grid>
		</div>
	);
}

export default Main;
