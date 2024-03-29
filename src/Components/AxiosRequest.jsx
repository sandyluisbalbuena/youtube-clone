import axios from 'axios'; 

export async function getVideos(query, url) {

	let errorNum = 0;
	let  key = 'cd9ed30d87mshe2c223498b2e25bp14f68fjsn96bfaad8ee3b';
	// let  key = '';

	// if(errorNum == 0){
		key = 'f293597e7dmsh66104292b3eccfcp16db32jsnd523df679fcf';
	// }else{
	// 	key = 'cd9ed30d87mshe2c223498b2e25bp14f68fjsn96bfaad8ee3b';
	// }

	const options = {
		method: 'GET',
		url: url,
		params: {
			q: query,
			part: 'snippet, id',
			regionCode: 'US',
			maxResults: '48',
			order: 'date'
		},
		headers: {
			'X-RapidAPI-Key': key,
			'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
		}
	};

	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		console.error(error);
		errorNum++;
		getVideos(query, url)
		throw error; 
	}
}

export async function getVideoDetails(videoId) {

	let errorNum = 0;
	let  key = 'cd9ed30d87mshe2c223498b2e25bp14f68fjsn96bfaad8ee3b';
	// let  key = '';

	// if(errorNum == 0){
		key = 'f293597e7dmsh66104292b3eccfcp16db32jsnd523df679fcf';
	// }else{
	// 	key = 'cd9ed30d87mshe2c223498b2e25bp14f68fjsn96bfaad8ee3b';
	// }
	
	const options = {
		method: 'GET',
		url: 'https://youtube-v31.p.rapidapi.com/videos',
		params: {
			part: 'contentDetails,snippet,statistics',
			id: videoId,
		},
		headers: {
			'X-RapidAPI-Key': key,
			'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
		}
	};

	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		console.error(error);
		errorNum++;
		throw error; 
	}
}

export async function getVideoComments(videoId) {

	let errorNum = 0;
	let  key = 'cd9ed30d87mshe2c223498b2e25bp14f68fjsn96bfaad8ee3b';
	// let  key = '';

	// if(errorNum == 0){
		key = 'f293597e7dmsh66104292b3eccfcp16db32jsnd523df679fcf';
	// }else{
	// 	key = 'cd9ed30d87mshe2c223498b2e25bp14f68fjsn96bfaad8ee3b';
	// }
	
	const options = {
		method: 'GET',
		url: 'https://youtube-v31.p.rapidapi.com/commentThreads',
		params: {
			part: 'snippet,statistics',
			videoId: videoId,
			maxResults: '100'
		},
		headers: {
			'X-RapidAPI-Key': key,
			'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
		}
	};

	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		console.error(error);
		errorNum++;
		throw error; 
	}
}

export async function getChannelDetails(channelId) {

	let errorNum = 0;
	let  key = 'cd9ed30d87mshe2c223498b2e25bp14f68fjsn96bfaad8ee3b';
	// let  key = '';

	// if(errorNum == 0){
		key = 'f293597e7dmsh66104292b3eccfcp16db32jsnd523df679fcf';
	// }else{
	// 	key = 'cd9ed30d87mshe2c223498b2e25bp14f68fjsn96bfaad8ee3b';
	// }
	
	const options = {
		method: 'GET',
		url: 'https://youtube-v31.p.rapidapi.com/channels',
		params: {
			part: 'snippet,statistics',
			id: channelId,
		},
		headers: {
			'X-RapidAPI-Key': key,
			'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
		}
	};

	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		console.error(error);
		errorNum++;
		getChannelDetails(channelId);
		throw error; 
	}
}

export async function getSuggestedVideos(videoId) {

	let errorNum = 0;
	let  key = 'cd9ed30d87mshe2c223498b2e25bp14f68fjsn96bfaad8ee3b';
	// let  key = '';

	// if(errorNum == 0){
		key = 'f293597e7dmsh66104292b3eccfcp16db32jsnd523df679fcf';
	// }else{
	// 	key = 'cd9ed30d87mshe2c223498b2e25bp14f68fjsn96bfaad8ee3b';
	// }
	
	const options = {
		method: 'GET',
		url: 'https://youtube-v31.p.rapidapi.com/search',
		params: {
			relatedToVideoId: videoId,
			part: 'id,snippet',
			type: 'video',
			maxResults: '50'
		},
		headers: {
			'X-RapidAPI-Key': key,
			'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
		}
	};

	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		console.error(error);
		errorNum++;
		getSuggestedVideos(videoId);
		throw error; 
	}
}

const AxiosRequest = () => {
	return (
		<></>
	);
};

export default AxiosRequest;
