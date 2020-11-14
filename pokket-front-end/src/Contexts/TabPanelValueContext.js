import React, { createContext, useState } from 'react';

export const TabPanelValueContext = createContext();

export const TabPanelValueContextProvider = ({ children }) => {
	const [ value, setValue ] = useState(0);
	const [ isOpen, setIsopen ] = useState(false);

	function updateValue(newValue) {
		setValue(newValue);
	}

	function updateOpenState(value) {
		setIsopen(value);
	}

	return (
		<TabPanelValueContext.Provider value={{ value, updateValue, isOpen, updateOpenState }}>
			{children}
		</TabPanelValueContext.Provider>
	);
};
