import { Avatar } from 'flowbite-react';

export default function DefaultAvatar({imgSrc}) {
	return (
		<Avatar
			alt="avatar"
			img={imgSrc}
			rounded
		/>
	)
}


