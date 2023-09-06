import { Navbar, DarkThemeToggle } from 'flowbite-react';
import InputSizing from './Search';
import Button from './Button';

export default function NavbarWithCTAButton() {

	
	return (
		<Navbar className='fixed w-full z-20'>
			<Navbar.Brand href="/">
				<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
				Video Player
				</span>
			</Navbar.Brand>	
			<div className="flex md:order-2">
				{/* <Button /> */}
				<div className='hidden lg:block'>
					<InputSizing />
				</div>

				<Navbar.Toggle />
			</div>
			<Navbar.Collapse>
				<div className='block lg:hidden'>
					<InputSizing />
				</div>
			</Navbar.Collapse>
		</Navbar>
	)
}


