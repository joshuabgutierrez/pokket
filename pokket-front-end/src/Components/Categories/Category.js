import { Typography } from '@material-ui/core';
import React from 'react';
import { BsHouseDoor } from 'react-icons/bs';
import { MdNavigateNext } from 'react-icons/md';
import styled from 'styled-components';

const CategoryContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 1.5em 0;
`;

const CategoryInfo = styled.div`
	display: flex;
	align-items: center;
`;

function Category() {
	return (
		<CategoryContainer>
			<CategoryInfo>
				<BsHouseDoor size="25" />
				<Typography variant="body2" style={{ marginLeft: '0.5em' }}>
					Housing
				</Typography>
			</CategoryInfo>
			<CategoryInfo>
				<Typography variant="body1">$1,200</Typography>
				<MdNavigateNext size="20" style={{ marginLeft: '0.5em' }} />
			</CategoryInfo>
		</CategoryContainer>
	);
}

export default Category;
