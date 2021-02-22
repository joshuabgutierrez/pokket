import { Grid, useTheme } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const StyledSection = styled.section`
	background-color: ${({ background }) => background};
	height: 97.5vh;
	display: flex;
	align-items: center;

	@media (max-width: 960px) {
		display: none;
	}
`;

function LeftShowcase() {
	const { palette } = useTheme();
	return (
		<StyledSection background={palette.primary.main}>
			<Grid container>
				<Grid item sm={12} md={12} lg={12}>
					<Typography variant="h5" color="secondary" align="center">
						Welcome to Pokket
					</Typography>
				</Grid>
				<Grid item sm={12} md={12} lg={12}>
					<Typography variant="subtitle1" color="secondary" align="center">
						A few clicks away to start managing your transactions
					</Typography>
				</Grid>
			</Grid>
		</StyledSection>
	);
}

export default LeftShowcase;
