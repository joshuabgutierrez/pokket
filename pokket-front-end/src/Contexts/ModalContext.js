import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
	// State for modal transactions
	const [ isModalOpen, setIsModalOpen ] = useState(false);

	const handleOpen = () => {
		setIsModalOpen(true);
	};
	const handleClose = () => {
		setIsModalOpen(false);
	};

	return <ModalContext.Provider value={{ isModalOpen, handleOpen, handleClose }}>{children}</ModalContext.Provider>;
};
