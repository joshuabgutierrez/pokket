import React from 'react';
import Typography from '@material-ui/core/Typography';
import CategoriesSummaryChart from '../../charts/CategoriesSummaryChart';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
	border: 2px solid #000;
	padding: 1em;
`;

function CategoriesSummary() {
	return (
		<Container>
			<header>
				<Typography variant="h6">Categories Summary</Typography>
			</header>
			<main>
				<CategoriesSummaryChart />
			</main>
		</Container>
	);
}

export default CategoriesSummary;
