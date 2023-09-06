import React from 'react';

const Card = ({ thumbnailSrc, title, channel }) => {
	return (
		<div className="max-w-sm overflow-hidden" href="#">
			<img className='rounded-xl' src={thumbnailSrc} alt="Video Thumbnail"/>
			<div className="px-6 py-4">
				<div className="font-bold text-xs mb-2">{title}</div>
				<p className="text-gray-400 text-xs">{channel}</p>
			</div>
		</div>
	);
};

export default Card;
