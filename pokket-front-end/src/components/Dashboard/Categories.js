import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { BASE_URL } from '../../api-client';

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
	const [ categories, setCategories ] = useState([]);

	const fetchCategories = async () => {
		try {
			const response = await axios.get('http://localhost:1337/categories');
			setCategories(response.data);
		} catch (error) {
			console.log(error.message);
		}
	};

	const showCategories = () => {
		return categories.map((category) => (
			<StyledArticle key={category.id}>
				<StyledSection>
					<img src={`${BASE_URL}${category.category_icon.url}`} alt={category.category_name} />
					<Typography variant="body1">{category.category_name}</Typography>
				</StyledSection>
				<Typography variant="subtitle2">$940</Typography>
			</StyledArticle>
		));
	};

	useEffect(() => {
		fetchCategories();
	}, []);

	return (
		<CategoriesContainer>
			<header>
				<Typography variant="h6">Popular Categories</Typography>
			</header>
			{showCategories()}
			{/* <StyledArticle>
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
			</StyledArticle> */}
		</CategoriesContainer>
	);
}

export default Categories;
