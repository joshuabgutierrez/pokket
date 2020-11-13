import React, { createContext, useState } from 'react';

export const TabPanelValueContext = createContext();

export const TabPanelValueContextProvider = ({ children }) => {
	const [ value, setValue ] = useState(0);

	function updateValue(newValue) {
		setValue(newValue);
	}

	return <TabPanelValueContext.Provider value={{ value, updateValue }}>{children}</TabPanelValueContext.Provider>;
};
