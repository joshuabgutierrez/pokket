import React, { useContext } from 'react';
import MenuContent from '../Components/Menu/MenuContent';
import styled from 'styled-components';
import { TabPanelValueContext } from '../Contexts/TabPanelValueContext';

const MobileMenuContainer = styled.div`
	width: 30%;
	position: absolute;
	top: 0;
	left: 0;
	margin: 0;
	display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

function MobileMenu() {
	const { isOpen, updateOpenState } = useContext(TabPanelValueContext);
	return (
		<MobileMenuContainer isOpen={isOpen}>
			<MenuContent />
		</MobileMenuContainer>
	);
}

export default MobileMenu;
