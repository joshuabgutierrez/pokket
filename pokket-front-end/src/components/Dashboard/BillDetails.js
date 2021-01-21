import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const BillContainer = styled.div`
	border: 2px solid #000;
	padding: 2em;
`;

const StyledMain = styled.main`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1em;
`;

function BillDetails() {
	return (
		<BillContainer>
			<header>
				<Typography variant="subtitle2">Spotify</Typography>
				<Typography variant="body2">Subscription</Typography>
			</header>
			<StyledMain>
				<section>
					<Typography variant="button">$9.99</Typography>
					<Typography variant="body2">February 1, 2021</Typography>
				</section>
				<Button variant="contained" size="small">
					Pay Now
				</Button>
			</StyledMain>
		</BillContainer>
	);
}

export default BillDetails;
