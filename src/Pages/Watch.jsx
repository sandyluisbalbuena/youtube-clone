import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SuggestedVideos from '../Components/SuggestedVideos';
import { getChannelDetails, getSuggestedVideos, getVideoDetails } from '../Components/AxiosRequest';
import { useDataStore } from '../Context/DataStoreContext';
import { useState } from 'react';
import DefaultAvatar from '../Components/Avatar';

const Watch = () => {
	const location = useLocation();
	const { resultDataList, setResultDataList } = useDataStore();

	const [videoDetailsData, setVideoDetailsData] = useState(null);
	const [channelDetailsData, setChannelDetailsData] = useState(null);
	const [videoId, setVideoId] = useState(null);
	const [suggestedVideosData, setSuggestedVideosData] = useState(null);

	const getVideoId = () => {
		setVideoId(new URLSearchParams(location.search).get('v'));
	}

	useEffect(() => {
		getVideoId();
		// console.log(videoId);
		// let player;

		if (videoId) {
			videoDetails(videoId);
			suggestedVideos(videoId);
			// Load YouTube player
			// const loadYouTubeVideo = () => {
			// 	// 1. Create a <div> element to hold the YouTube player
			// 	const playerDiv = document.createElement('div');
			// 	playerDiv.classList.add('w-full', 'rounded-lg');
			// 	playerDiv.id = 'youtube-player';
			// 	document.querySelector('.iframe').appendChild(playerDiv);
			// 	// 2. Load the YouTube IFrame Player API asynchronously
			// 	const tag = document.createElement('script');
			// 	tag.src = 'https://www.youtube.com/iframe_api';
			// 	const firstScriptTag = document.getElementsByTagName('script')[0];
			// 	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
			// 	// 3. Create the YouTube player after the API code downloads
			// 	window.onYouTubeIframeAPIReady = function () {

			// 		setTimeout(() => {
			// 			player = new window.YT.Player('youtube-player', {
			// 				height: '545',
			// 				videoId: videoId,
			// 				playerVars: {
			// 				playsinline: 1,
			// 				},
			// 				events: {
			// 				onReady: onPlayerReady,
			// 				onStateChange: onPlayerStateChange,
			// 				},
			// 			});
			// 		}, 500);
					
			// 	};
			// 	// 4. The API will call this function when the video player is ready.
			// 	function onPlayerReady(event) {
			// 		event.target.playVideo();
			// 	}
			// 	// 5. The API calls this function when the player's state changes.
			// 	// You can add your custom logic here.
			// 	function onPlayerStateChange(event) {
			// 		if (event.data === window.YT.PlayerState.PLAYING && !done) {
			// 			// setTimeout(stopVideo, 6000);
			// 			done = true;
			// 		}
			// 	}
		
			// 	// 6. Function to stop the video
			// 	let done = false;
			// 	function stopVideo() {
			// 		player.stopVideo();
			// 	}
			// };
		
			// loadYouTubeVideo();
		}

		// return () => {
		// 	if (player) {
		// 		player.destroy();
		// 	}
		// };

	}, [videoId]);

	const videoDetails = (videoId) => {
		getVideoDetails(videoId)
		.then((data) => {
			console.log('video  ',data)
			setVideoDetailsData(data.items[0]);
			channelDetails(data.items[0].snippet.channelId)
		})
		.catch((error) => {
			console.error(error);
		});
	}

	const channelDetails = (channelId) => {
		getChannelDetails(channelId)
		.then((data) => {
			// console.log('channel  ',data)
			setChannelDetailsData(data.items[0])
		})
		.catch((error) => {
			console.error(error);
		});
	}

	const suggestedVideos = (videoId) => {
		getSuggestedVideos(videoId)
		.then((data) => {
			setResultDataList(data.items);
			console.log('Suggested Videos: ', data.items);
		})
		.catch((error) => {
			console.error(error);
		});
	}

	return (
		<section className='lg:mx-20 mx-5 mt-20'>
			<div className='grid grid-cols-7 gap-4'>
				<div className='col-span-5'>
					<div className='iframe rounded-xl' id='iframe'>
						{videoDetailsData &&
							(
								<iframe className='w-full rounded-md' height={550} src={"https://www.youtube.com/embed/"+videoDetailsData.id} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
							)
						}

					</div>
					<div className='flex my-2'>
						<p className='font-bold text-md mt-2'>
							{videoDetailsData?.snippet.title}
						</p>
					</div>
					{channelDetailsData && 
						(
							<div className='flex my-2 items-center'>
								<DefaultAvatar imgSrc= {channelDetailsData.snippet.thumbnails.medium.url} />
								<div>
									<p className='text-sm font-bold mx-4'>{channelDetailsData.snippet.title}</p>
									<p className='text-xs mx-4 text-gray-400'>{channelDetailsData.statistics.subscriberCount} subscribers</p>
								</div>
							</div>
						)
					}
				</div>
				<div className='col-span-2'>
					{resultDataList &&
						(
							<SuggestedVideos />
						)
					}
				</div>
			</div>
		</section>
	);
};

export default Watch;
