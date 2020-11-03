import React from 'react';
import styled from 'styled-components';
import MenuContent from './MenuContent';

const StyledMenu = styled.aside`
	color: #000;
	background-color: #fff;
	height: 100vh;
	max-width: 100%;

	h3 {
		margin: 0;
	}
`;

const Logo = styled.h3`
	font-size: 1.5rem;
	text-transform: uppercase;
	padding: 1em 0;
`;

function Menu() {
	return (
		<StyledMenu>
			<Logo>Pokket</Logo>
			<MenuContent />
		</StyledMenu>
	);
}

export default Menu;
