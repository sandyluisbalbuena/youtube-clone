import React, { createContext, useContext, useState } from 'react';

const DataStoreContext = createContext();

export function DataStoreProvider({ children }) {
	const [resultData, setResultData] = useState(null);
	const [resultDataList, setResultDataList] = useState(null);

	return (
		<DataStoreContext.Provider value={{ resultData, setResultData, resultDataList, setResultDataList }}>
		{children}
		</DataStoreContext.Provider>
	);
}

export function useDataStore() {
	return useContext(DataStoreContext);
}
