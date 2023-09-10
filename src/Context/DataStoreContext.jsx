import React, { createContext, useContext, useState } from 'react';

const DataStoreContext = createContext();

export function DataStoreProvider({ children }) {
	const [resultData, setResultData] = useState(null);
	const [resultDataList, setResultDataList] = useState(null);
	const [videoDetailsData, setVideoDetailsData] = useState(null);

	return (
		<DataStoreContext.Provider value={{ resultData, setResultData, resultDataList, setResultDataList, videoDetailsData, setVideoDetailsData }}>
		{children}
		</DataStoreContext.Provider>
	);
}

export function useDataStore() {
	return useContext(DataStoreContext);
}
