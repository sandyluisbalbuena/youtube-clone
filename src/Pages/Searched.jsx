import React from 'react'
import Results from '../Components/Results'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Searched = () => {
	// Use the useLocation hook to access the location object
	const location = useLocation();
	// Parse the query parameters from the search property
	const queryParams = new URLSearchParams(location.search);
	// Get the value of the 'v' query parameter

	const [query, setQuery] = useState(queryParams.get('q'));
	const [hasQuery, setHasQuery] = useState(false);

	useEffect(() => {
		if(query != undefined){
			setQuery(queryParams.get('q'));
			setHasQuery(true);

			console.log(query);
		}
	}, [])
	

	return (
		<section className='lg:mx-20 mx-5 mt-20'>
			{hasQuery && <Results query={query}/>}
		</section>
	)
}

export default Searched