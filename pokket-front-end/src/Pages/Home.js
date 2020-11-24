import React, { useContext } from 'react';
import Menu from '../Components/Menu/Menu';
import Header from '../Components/Header/Header';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import DashboardContent from '../Components/DashboardContent/DashboardContent';
import PropTypes from 'prop-types';
import Transactions from './Transactions';
import { TabPanelValueContext } from '../Contexts/TabPanelValueContext';
import MobileMenu from '../Styles/MobileMenu';
import Budget from '../Components/Budget/Budget';
import Accounts from '../Components/Accounts/Accounts';
import Goals from '../Components/Goals/Goals';

const HomeContainer = styled.div`
	background-color: #ffffff;
	position: relative;
`;

const StyledTabItem = styled.div`
	background-color: #ffffff;
	padding: 3em 5em;
`;

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div role="tabpanel" hidden={value !== index} aria-labelledby={`vertical-tab-${index}`} {...other}>
			{value === index && <StyledTabItem>{children}</StyledTabItem>}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

const Home = () => {
	const { value } = useContext(TabPanelValueContext);
	const { updateOpenState } = useContext(TabPanelValueContext);

	return (
		<HomeContainer>
			<MobileMenu />
			<Grid container>
				<Grid item xs={2} sm={2} md={2} lg={1}>
					<Menu />
				</Grid>
				<Grid item xs={12} sm={10} md={10} lg={11}>
					<Grid container>
						<Grid item xs={12} sm={12} md={12}>
							<Header />
						</Grid>
						<Grid item xs={12} sm={12} md={12} onClick={() => updateOpenState(false)}>
							<TabPanel value={value} index={0}>
								<DashboardContent />
							</TabPanel>
							<TabPanel value={value} index={1}>
								<Transactions />
							</TabPanel>
							<TabPanel value={value} index={2}>
								<Budget />
							</TabPanel>
							<TabPanel value={value} index={3}>
								<Accounts />
							</TabPanel>
							<TabPanel value={value} index={4}>
								<Goals />
							</TabPanel>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</HomeContainer>
	);
};

export default Home;
