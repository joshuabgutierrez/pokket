import React from 'react';
import styled from 'styled-components';
import MenuContent from './MenuContent';

const StyledMenu = styled.aside`
	color: #000;
	width: 100%;
	background-color: #2c2c2c;
	height: 100%;

	h3 {
		margin: 0;
	}

	@media (max-width: 599px) {
		display: none;
	}
`;

const Logo = styled.h3`
	font-size: 1.5rem;
	text-transform: uppercase;
	padding: 1em 0;
	color: #fff;
	text-align: center;
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
