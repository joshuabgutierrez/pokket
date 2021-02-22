import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import LeftShowcase from '../LeftShowcase';
import styled from 'styled-components';
import SigninForm from './SigninForm';

const StyledHeader = styled.header`
	margin: 2em 0;
	text-align: center;
`;

function Signin() {
	return (
		<div>
			<Grid container>
				<Grid item md={4} lg={4}>
					<LeftShowcase />
				</Grid>
				<Grid item xs={12} sm={12} md={8} lg={8}>
					<Grid container justify="center">
						<Grid item xs={12} sm={12} md={10} lg={8}>
							<StyledHeader>
								<Typography variant="h6">Log in to your account</Typography>
								<Typography variant="subtitle1">
									Thank you for getting back to Pokket. Continue managing your transactions
								</Typography>
							</StyledHeader>
						</Grid>
						<Grid item xs={12} sm={12} md={10} lg={8}>
							<SigninForm />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default Signin;
