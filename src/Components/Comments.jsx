import React from 'react'
import DefaultAvatar from './Avatar'

const Comments = ({commentsData}) => {

	const calculateAge = (publishedAt) => {
		// Parse the publishedAt timestamp into a Date object
		const publishedDate = new Date(publishedAt);
	
		// Get the current date
		const currentDate = new Date();
	
		// Calculate the time difference in milliseconds
		const timeDifference = currentDate - publishedDate;
	
		// Calculate years, months, days, hours, minutes, and seconds
		const secondsDifference = Math.floor(timeDifference / 1000);
		const minutesDifference = Math.floor(secondsDifference / 60);
		const hoursDifference = Math.floor(minutesDifference / 60);
		const daysDifference = Math.floor(hoursDifference / 24);
		const weeksDifference = Math.floor(daysDifference / 7);
		const monthsDifference = Math.floor(currentDate.getMonth() - publishedDate.getMonth() + (12 * (currentDate.getFullYear() - publishedDate.getFullYear())));
		const yearsDifference = Math.floor(currentDate.getFullYear() - publishedDate.getFullYear());
	
		// Create a human-readable age string
		if (yearsDifference >= 1) {
			return yearsDifference === 1 ? "1 year ago" : `${yearsDifference} years ago`;
		} else if (monthsDifference >= 1) {
			return monthsDifference === 1 ? "1 month ago" : `${monthsDifference} months ago`;
		} else if (weeksDifference >= 1) {
			return weeksDifference === 1 ? "1 week ago" : `${weeksDifference} weeks ago`;
		} else if (daysDifference >= 1) {
			return daysDifference === 1 ? "1 day ago" : `${daysDifference} days ago`;
		} else if (hoursDifference >= 1) {
			return hoursDifference === 1 ? "1 hour ago" : `${hoursDifference} hours ago`;
		} else if (minutesDifference >= 1) {
			return minutesDifference === 1 ? "1 minute ago" : `${minutesDifference} minutes ago`;
		} else {
			return secondsDifference <= 10 ? "just now" : `${secondsDifference} seconds ago`;
		}
	}

	return (
		<ul>
			{commentsData.map((item) => (
				<li key={item.id}>
					<div className='flex my-5'>
					{/* {item.snippet.topLevelComment.snippet.authorProfileImageUrl} */}
						<DefaultAvatar imgSrc={item.snippet.topLevelComment.snippet.authorProfileImageUrl} />
						<div className='m-3'>
							<p className='text-xs'>
								<span className='font-bold'>
								@{item.snippet.topLevelComment.snippet.authorDisplayName} &nbsp;
								</span>
								<span className='text-gray-600'>
								{calculateAge(item.snippet.topLevelComment.snippet.publishedAt)} 
								</span>
							</p>
							<p className='text-sm'>
								{item.snippet.topLevelComment.snippet.textDisplay}
							</p>
						</div>
					</div>
				</li>	
			))}
		</ul>
	)
}

export default Comments