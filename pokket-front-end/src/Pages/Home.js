import React, { useContext } from 'react';
import Menu from '../Components/Menu/Menu';
import Header from '../Components/Header/Header';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import DashboardContent from '../Components/DashboardContent/DashboardContent';
import PropTypes from 'prop-types';
import Transactions from './Transactions';
import { TabPanelValueContext } from '../Contexts/TabPanelValueContext';

const HomeContainer = styled.div`background-color: #ffffff;`;

const StyledTabItem = styled.div`background-color: #ffffff;`;

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

	return (
		<HomeContainer>
			<Grid container>
				<Grid item sm={2} md={2} lg={1}>
					<Menu />
				</Grid>
				<Grid item xs={12} sm={10} md={10} lg={11}>
					<Grid container>
						<Grid item xs={12} sm={12} md={12}>
							<Header />
						</Grid>
						<Grid item xs={12} sm={12} md={12}>
							<TabPanel value={value} index={0}>
								<DashboardContent />
							</TabPanel>
							<TabPanel value={value} index={1}>
								<Transactions />
							</TabPanel>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</HomeContainer>
	);
};

export default Home;
