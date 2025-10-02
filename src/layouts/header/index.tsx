import Image from 'next/image';

const Header = () => {
	return (
		<header className='bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 shadow-lg'>
			<div className='flex items-center justify-between px-6 py-4'>
				{/* Logo Section */}
				<div className='flex items-center space-x-3'>
					<div className='bg-blue-600 p-2 rounded-lg shadow-md'>
						<Image
							src='/next.svg'
							alt='CommerceHub Logo'
							width={24}
							height={24}
							className='brightness-0 invert'
						/>
					</div>
					<div>
						<h1 className='text-xl font-bold text-white'>CommerceHub</h1>
						<p className='text-xs text-slate-400'>Admin Dashboard</p>
					</div>
				</div>

				{/* Search Bar */}
				<div className='hidden md:flex flex-1 max-w-md mx-8'>
					<div className='relative w-full'>
						<input
							type='text'
							placeholder='Search...'
							className='w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 pl-10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
						/>
						<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
							<svg
								className='h-4 w-4 text-slate-400'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
								/>
							</svg>
						</div>
					</div>
				</div>

				{/* User profile */}
				<div className='flex items-center space-x-4'>
					<div className='flex items-center space-x-3 pl-4 border-l border-slate-700'>
						<div className='text-right hidden sm:block'>
							<p className='text-sm font-medium text-white'>John Doe</p>
							<p className='text-xs text-slate-400'>Administrator</p>
						</div>
						<div className='h-9 w-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center'>
							<span className='text-sm font-medium text-white'>JD</span>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
