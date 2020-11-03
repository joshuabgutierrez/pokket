import React from 'react';
import Menu from '../Components/Menu/Menu';
import Header from '../Components/Header/Header';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import DashboardContent from '../Components/DashboardContent/DashboardContent';

const DashboardContainer = styled.div`
	background-color: #ffffff;
	height: 100vh;
`;

const Dashboard = () => {
	return (
		<DashboardContainer>
			<Grid container>
				<Grid item xs={12} sm={1} md={1} lg={1}>
					<Menu />
				</Grid>
				<Grid item xs={12} sm={11} md={11} lg={11}>
					<Grid container>
						<Grid item xs={12} sm={12} md={12}>
							<Header />
						</Grid>
						<Grid item xs={12} sm={12} md={12}>
							<DashboardContent />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</DashboardContainer>
	);
};

export default Dashboard;
