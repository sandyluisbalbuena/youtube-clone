import React from 'react';

const Card2 = ({ thumbnailSrc, title, channel }) => {
	return (
		<div className="overflow-hidden grid grid-cols-2 gap-4" href="#">
			<img className='rounded-md' width={200} src={thumbnailSrc} alt="Video Thumbnail"/>
			<div className="p-2">
				<div className="font-bold text-xs mb-2">{title}</div>
				<p className="text-gray-400 text-xs">{channel}</p>
			</div>
		</div>
	);
};

export default Card2;
