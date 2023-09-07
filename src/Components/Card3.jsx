import { Card } from 'flowbite-react';
import { useState } from 'react';

export default function Card3({views, dateUpload, description}) {

	const [isExpanded, setIsExpanded] = useState(false);


	const calculateAge = (publishedAt) => {
		// Parse the publishedAt timestamp into a Date object
		const publishedDate = new Date(publishedAt);
	
		// Get the current date
		const currentDate = new Date();
	
		// Calculate the time difference in milliseconds
		const timeDifference = currentDate - publishedDate;
	
		// Calculate the years, months, and days
		const years = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));
		const months = Math.floor((timeDifference % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000));
		const days = Math.floor(((timeDifference % (365 * 24 * 60 * 60 * 1000)) % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
	
		// Create a human-readable age string
		let ageString = '';
		if (years > 0) {
		ageString += years + ' year' + (years > 1 ? 's' : '') + ' ';
		}
		if (months > 0) {
		ageString += months + ' month' + (months > 1 ? 's' : '') + ' ';
		}
		if (days > 0) {
		ageString += days + ' day' + (days > 1 ? 's' : '');
		}
	
		return ageString.trim();
	}

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<Card
			className="w-full border-none"
		>
			<h5 className="text-xs font-bold text-gray-900 dark:text-white">
				<p>
				{views} views {calculateAge(dateUpload)} ago
				</p>
			</h5>
			<p className={`text-xs font-normal break-words text-gray-700 dark:text-gray-400 ${isExpanded ? 'block' : 'truncate'}`}>
				{description}
			</p>
			<button
				onClick={toggleExpand}
				className={`justify-end flex ${isExpanded ? 'block' : 'hidden'}`}
			>
				<p className='text-xs'>
					Show Less
				</p>
			</button>
			<button
				onClick={toggleExpand}
				className={`justify-end flex ${isExpanded ? 'hidden' : 'block'}`}
			>
				<p className='text-xs'>
					...more
				</p>
			</button>
		</Card>
	)
}


