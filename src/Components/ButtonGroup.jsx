import { Button } from 'flowbite-react';
import { BiLike, BiDislike } from 'react-icons/bi'

export default function ButtonGroup({likes}) {
	return (
		<Button.Group outline >
			<Button color="info">
				<div className='flex items-center'>
					<BiLike /> &nbsp;
					<p className='text-sm font-thin'>
					{ likes }
					</p>
				</div>
			</Button>
			<Button color="info">
				<div className='flex items-center'>
					<BiDislike />
					<p className='text-sm font-thin'>
					{/* { likes } */} &nbsp;
					</p>
				</div>
			</Button>
		</Button.Group>
	)
}


