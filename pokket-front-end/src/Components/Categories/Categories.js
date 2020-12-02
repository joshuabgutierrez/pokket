import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { HiDotsHorizontal } from 'react-icons/hi';
import Category from './Category';
import styled from 'styled-components';
import axios from 'axios';

const CategoriesContainer = styled.div`
	background-color: #007ee3;
	color: #fff;
	padding: 1em 2em;
	border-radius: 10px;
	max-width: 100%;
`;

const CategoriesHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

function Categories() {
	const [ categories, setCategories ] = useState([]);

	useEffect(() => {
		async function getCategories() {
			const categories = await axios('http://localhost:1337/categories');
			setCategories(categories.data);
		}
		getCategories();
	}, []);

	return (
		<CategoriesContainer>
			<CategoriesHeader>
				<Typography variant="body1">Popular Categories</Typography>
				<HiDotsHorizontal size="35" />
			</CategoriesHeader>
			<section>
				{categories.length > 0 ? (
					categories.map((category) => (
						<Category
							key={category.id}
							name={category.name}
							avatar={'http://localhost:1337' + category.category_avatar.url}
						/>
					))
				) : (
					<Typography variant="h6">...Loading</Typography>
				)}
			</section>
		</CategoriesContainer>
	);
}

export default Categories;
