import { TextInput } from 'flowbite-react';
import { HiSearch } from 'react-icons/hi';
import { getVideos } from './AxiosRequest';
import { useState } from 'react';
import { useDataStore } from '../Context/DataStoreContext';
import { useNavigate } from 'react-router-dom';

export default function InputSizing() {

	const [query, setQuery] = useState('');
	const { setResultData } = useDataStore();
	const navigate = useNavigate();


	const handleChange = (event) => {
		setQuery(event.target.value);
		console.log(event.target.value);
	}

	const handleKeyDown = (event) => {
		// Check if Enter key (key code 13) is pressed
		if (event.key === 'Enter') {
			// Prevent the default form submission behavior
			event.preventDefault();
			// Call getData when Enter is pressed
			getData(query);
		}
	};

	const getData = (query) => {
		let url = 'https://youtube-v31.p.rapidapi.com/search';
		getVideos(query, url)
		.then((data) => {
			setResultData(data.items);

			const url = `/results?q=${query}`;
			// Use history.push to navigate to the new URL
			navigate(url);
		})
		.catch((error) => {
			console.error(error);
		});
	}

	return (
		<TextInput 
			id="query"
			sizing="sm"
			type="text"
			onChange={handleChange}
			onKeyDown={handleKeyDown}
			rightIcon={ HiSearch }
		/>
	)
}


