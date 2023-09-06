import React from 'react';
import { useDataStore } from '../Context/DataStoreContext';
import Card from './Card';
import { useEffect } from 'react';
import { getVideos } from './AxiosRequest';
import { useNavigate } from 'react-router-dom';

export default function Results(props) {
  	const { resultData, setResultData } = useDataStore(); // Access the resultData from the context
	const navigate = useNavigate();

	useEffect(() => {
		if(props.random == 'random'){
			let url = 'https://youtube-v31.p.rapidapi.com/search';
			let query = 'dota2 Rizpol';
			getVideos(query, url)
			.then((data) => {
				setResultData(data.items);
			})
			.catch((error) => {
				console.error(error);
			});
		}

		if(props.query){
			let url = 'https://youtube-v31.p.rapidapi.com/search';
			let query = props.query;
			getVideos(query, url)
			.then((data) => {
				setResultData(data.items);
			})
			.catch((error) => {
				console.error(error);
			});
		}
	}, [])
	
	const handleClick = (videoId) => {
		// Construct the URL with the videoId parameter
		const url = `/watch?v=${videoId}`;

		// Use history.push to navigate to the new URL
		navigate(url);
	}

	return (
		<div>
		{Array.isArray(resultData) && resultData.length > 0 ? (
			<div className='my-5 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 lg:gap-5'>
				{resultData.map((item) => (
					<div key={item.id.videoId} onClick={()=>handleClick(item.id.videoId)} className='m-2 transition-all duration-300 ease-in-out hover:m-0'>
						<Card
							thumbnailSrc={item.snippet.thumbnails.high.url} // Replace with actual thumbnail URL
							title={item.snippet.title}
							channel={item.snippet.channelTitle}
						/>
					</div>
				))}
			</div>
		) : (
			<p>No results to display.</p>
		)}
		</div>
	);
}
