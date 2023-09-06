import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarWithCTAButton from '../Components/Navbar'
import { Flowbite } from 'flowbite-react';

const Layout = () => {
	return (
		<Flowbite>
			<div className='dark'>
				<main className='dark:bg-slate-950 dark:text-slate-200 flex flex-col min-h-screen'>
					<NavbarWithCTAButton />
					<div className='flex-1'>
						<Outlet />
					</div>
				</main>
			</div>
		</Flowbite>
	)
}

export default Layout