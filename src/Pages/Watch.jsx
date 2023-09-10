import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SuggestedVideos from '../Components/SuggestedVideos';
import { getChannelDetails, getSuggestedVideos, getVideoComments, getVideoDetails } from '../Components/AxiosRequest';
import { useDataStore } from '../Context/DataStoreContext';
import { useState } from 'react';
import DefaultAvatar from '../Components/Avatar';
import ButtonGroup from '../Components/ButtonGroup';
import Card3 from '../Components/Card3';
import Comments from '../Components/Comments';

const Watch = () => {
	const location = useLocation();
	const { resultDataList, setResultDataList, videoDetailsData, setVideoDetailsData } = useDataStore();

	// const [videoDetailsData, setVideoDetailsData] = useState(null);
	const [channelDetailsData, setChannelDetailsData] = useState(null);
	const [videoId, setVideoId] = useState(null);
	const [commentsData, setCommentsData] = useState(null);

	const getVideoId = () => {
		setVideoId(new URLSearchParams(location.search).get('v'));
	}

	const getOthers = (videoId) => {
		videoComments(videoId);
		suggestedVideos(videoId);
		videoDetails(videoId);
	}

	const init = () => {
		getVideoId();


		if (videoId) {
			getOthers(videoId);
		}
	}

	useEffect(() => {
		init();
		// console.log(videoId);
		// let player;

		

		// if (videoId) {
		// 	getOthers(videoId);
		// }

		// return () => {
		// 	if (player) {
		// 		player.destroy();
		// 	}
		// };

	}, [videoId]);

	

	const videoDetails = (videoId) => {
		getVideoDetails(videoId)
		.then((data) => {
			// console.log('video  ',data)
			setVideoDetailsData(data.items[0]);
			// channelDetails(data.items[0].snippet.channelId)
		})
		.catch((error) => {
			console.error(error);
		});
	}

	const videoComments = (videoId) => {
		getVideoComments(videoId)
		.then((data) => {
			console.log('comments  ',data)
			setCommentsData(data.items);
			// setVideoDetailsData(data.items[0]);
			// channelDetails(data.items[0].snippet.channelId)
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
			// console.log('Suggested Videos: ', data.items);
		})
		.catch((error) => {
			console.error(error);
		});
	}

	const largeNumberConverter = (number) => {
		if (number < 1000) {
			return parseFloat(number).toString();
		} else if (number < 1000000) {
			const rounded = parseFloat((number / 1000).toFixed(1));
			return rounded.toString() + 'K';
		} else if (number < 1000000000) {
			const rounded = parseFloat((number / 1000000).toFixed(1));
			return rounded.toString() + 'M';
		} else {
			const rounded = parseFloat((number / 1000000000).toFixed(1));
			return rounded.toString() + 'B';
		}
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

					<div className='flex my-2'>
						{channelDetailsData && 
							(
								<div className='flex items-center w-full'>
									<DefaultAvatar imgSrc= {channelDetailsData.snippet.thumbnails.medium.url} />
									<div>
										<p className='text-sm font-bold mx-4'>{channelDetailsData.snippet.title}</p>
										<p className='text-xs mx-4 text-gray-400'>{largeNumberConverter(channelDetailsData.statistics.subscriberCount)} subscribers</p>
									</div>
								</div>
							)
						}
						<div className='flex justify-end w-full' >
							<ButtonGroup likes={largeNumberConverter(videoDetailsData?.statistics.likeCount)} />
						</div>
					</div>

					<div className='my-8'>
						<Card3 views={largeNumberConverter(videoDetailsData?.statistics.viewCount)} dateUpload={videoDetailsData?.snippet.publishedAt} description={videoDetailsData?.snippet.description}/>
					</div>

					<div className='my-4'>
						<p className='font-normal break-words text-gray-700 dark:text-gray-400'>
							{videoDetailsData?.statistics.commentCount} comments
						</p>
						<div className='my-5'>
							{commentsData && <Comments commentsData={commentsData}/>}
						</div>
					</div>

				</div>


				<div className='col-span-2'>
					{resultDataList &&
						(
							<SuggestedVideos init={init}/>
						)
					}
				</div>


			</div>
		</section>
	);
};

export default Watch;
