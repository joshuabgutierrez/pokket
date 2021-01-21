import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import FoodDiningIcon from '../../assets/images/FoodDining.png';
import HealthFitnessIcon from '../../assets/images/HealthFitness.png';
import ShoppingIcon from '../../assets/images/Shopping.png';
import AutoTransportIcon from '../../assets/images/AutoTransport.png';
import TravelIcon from '../../assets/images/Travel.png';
import BillsUtilitiesIcon from '../../assets/images/BillsUtilities.png';

// Styled-components styling
const CategoriesContainer = styled.div`
	border: 2px solid #000;
	border-radius: 5px;
	padding: 2em;
`;

const StyledSection = styled.section`
	display: flex;
	align-items: center;

	& img {
		margin-right: 1em;
	}
`;

const StyledArticle = styled.article`
	margin-top: 1em;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
// !Styled-components styling

function Categories() {
	return (
		<CategoriesContainer>
			<header>
				<Typography variant="h6">Popular Categories</Typography>
			</header>
			<StyledArticle>
				<StyledSection>
					<img src={FoodDiningIcon} alt="Food and Dining" />
					<Typography variant="body1">Food</Typography>
				</StyledSection>
				<Typography variant="subtitle2">$340</Typography>
			</StyledArticle>
			<StyledArticle>
				<StyledSection>
					<img src={HealthFitnessIcon} alt="Health and Fitness" />
					<Typography variant="body1">Health & Fitness</Typography>
				</StyledSection>
				<Typography variant="subtitle2">$940</Typography>
			</StyledArticle>
			<StyledArticle>
				<StyledSection>
					<img src={ShoppingIcon} alt="Shopping" />
					<Typography variant="body1">Shopping</Typography>
				</StyledSection>
				<Typography variant="subtitle2">$1,040</Typography>
			</StyledArticle>
			<StyledArticle>
				<StyledSection>
					<img src={AutoTransportIcon} alt="Auto and Transport" />
					<Typography variant="body1">Auto & Transport</Typography>
				</StyledSection>
				<Typography variant="subtitle2">$140</Typography>
			</StyledArticle>
			<StyledArticle>
				<StyledSection>
					<img src={TravelIcon} alt="Travel" />
					<Typography variant="body1">Travel</Typography>
				</StyledSection>
				<Typography variant="subtitle2">$1,250</Typography>
			</StyledArticle>
			<StyledArticle>
				<StyledSection>
					<img src={BillsUtilitiesIcon} alt="Bills and Utilities" />
					<Typography variant="body1">Bills & Utilities</Typography>
				</StyledSection>
				<Typography variant="subtitle2">$540</Typography>
			</StyledArticle>
		</CategoriesContainer>
	);
}

export default Categories;
