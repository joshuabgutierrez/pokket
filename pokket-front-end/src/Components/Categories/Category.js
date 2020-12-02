import { Typography } from '@material-ui/core';
import React from 'react';
import { MdNavigateNext } from 'react-icons/md';
import styled from 'styled-components';

const CategoryContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 1em 0;
`;

const CategoryInfo = styled.div`
	display: flex;
	align-items: center;
`;

function Category({ name, avatar }) {
	return (
		<CategoryContainer>
			<CategoryInfo>
				<img src={avatar} alt="icon for category" />
				<Typography variant="body2" style={{ marginLeft: '0.5em' }}>
					{name}
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
