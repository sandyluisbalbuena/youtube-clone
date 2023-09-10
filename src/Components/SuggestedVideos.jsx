import React from 'react';
import { useDataStore } from '../Context/DataStoreContext';
import { useEffect } from 'react';
import { getVideos } from './AxiosRequest';
import { useNavigate } from 'react-router-dom';
import Card2 from './Card2';

export default function SuggestedVideos({init}) {
  	const { resultDataList } = useDataStore(); // Access the resultData from the context
	const navigate = useNavigate();

	// useEffect(() => {

		// console.log(resultDataList);
		// if(props.random == 'random'){
		// 	let url = 'https://youtube-v31.p.rapidapi.com/search';
		// 	let query = 'dota2 Rizpol';
		// 	getVideos(query, url)
		// 	.then((data) => {
		// 		setResultData(data.items);
		// 	})
		// 	.catch((error) => {
		// 		console.error(error);
		// 	});
		// }

		// if(props.query){
		// 	let url = 'https://youtube-v31.p.rapidapi.com/search';
		// 	let query = props.query;
		// 	getVideos(query, url)
		// 	.then((data) => {
		// 		setResultData(data.items);
		// 	})
		// 	.catch((error) => {
		// 		console.error(error);
		// 	});
		// }
	// }, [])
	
	const handleClick = (videoId) => {
		// Construct the URL with the videoId parameter
		const url = `/watch?v=${videoId}`;
		navigate(url);
		init();
	}

	return (
		<div>
		{Array.isArray(resultDataList) && resultDataList.length > 0 ? (
			<div className=''>
				{resultDataList.map((item) => (
					<div key={item.id.videoId} onClick={()=>handleClick(item.id.videoId)} className='mx-2 mb-4 transition-all duration-300 ease-in-out hover:mx-0'>
						<Card2
							thumbnailSrc={item?.snippet.thumbnails.high.url} // Replace with actual thumbnail URL
							title={item?.snippet.title}
							channel={item?.snippet.channelTitle}
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
