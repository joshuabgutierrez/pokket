import React from 'react';
import Typography from '@material-ui/core/Typography';
import { HiDotsHorizontal } from 'react-icons/hi';
import Category from './Category';
import styled from 'styled-components';

const CategoriesContainer = styled.div`
	background-color: #4357ad;
	color: #fff;
	padding: 1em 2em;
	max-width: 370px;
	border-radius: 10px;
`;

const CategoriesHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

function Categories() {
	return (
		<CategoriesContainer>
			<CategoriesHeader>
				<Typography variant="body1">Popular Categories</Typography>
				<HiDotsHorizontal size="35" />
			</CategoriesHeader>
			<section>
				<Category />
				<Category />
				<Category />
				<Category />
				<Category />
			</section>
		</CategoriesContainer>
	);
}

export default Categories;
