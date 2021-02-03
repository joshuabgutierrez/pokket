import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import BillContainer from './BillContainer';

const StyledSection = styled.section`
	background-color: #ddd;
	opacity: 0.7;
	padding: 1em;
	margin-top: 2em;
	text-align: center;
`;

function BillSection({ handleOpenPayBillModal }) {
	return (
		<Grid container justify="center">
			<Grid item xs={12} sm={10} md={8} lg={8}>
				<StyledSection>
					<Typography variant="button">Due Today</Typography>
				</StyledSection>
			</Grid>
			<Grid item xs={12} sm={10} md={8} lg={8}>
				<BillContainer handleOpenPayBillModal={handleOpenPayBillModal} />
				<BillContainer handleOpenPayBillModal={handleOpenPayBillModal} />
			</Grid>
		</Grid>
	);
}

export default BillSection;
