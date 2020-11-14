import { Button, Grid, Typography, useMediaQuery } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const TabTitle = styled(Typography)`
	
	@media (max-width: 960px) {
		font-size: 1.5rem;
	}
	@media (max-width: 500px) {
		font-size: 1.25rem;
	}
	
`;

function Header() {
	const isScreenSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));

	const buttonSize = {
		size: isScreenSmall ? 'small' : 'medium'
	};

	return (
		<React.Fragment>
			<Grid container alignItems="center">
				<Grid item xs={2} sm={3} md={7} lg={8}>
					<TabTitle variant="h4" color="secondary" align="left">
						OVERVIEW
					</TabTitle>
				</Grid>
				<Grid item xs={10} sm={9} md={5} lg={4}>
					<Grid container justify="flex-end">
						<Grid item xs={8} sm={8} md={7} lg={8}>
							<ButtonContainer>
								<Button variant="contained" color="primary" {...buttonSize}>
									This Week
								</Button>
							</ButtonContainer>
						</Grid>
						<Grid item xs={4} sm={4} md={5} lg={4}>
							<ButtonContainer>
								<Button variant="contained" color="secondary" {...buttonSize}>
									November
								</Button>
							</ButtonContainer>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

export default Header;
