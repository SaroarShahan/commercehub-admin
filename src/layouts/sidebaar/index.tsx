import Link from 'next/link';

const Sidebar = () => {
	const navigationItems = [
		{
			title: 'Dashboard',
			href: '/dashboard',
			icon: (
				<svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z'
					/>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M8 5a2 2 0 012-2h4a2 2 0 012 2v0M8 5a2 2 0 012-2h4a2 2 0 012 2v0'
					/>
				</svg>
			),
		},
		{
			title: 'Users',
			href: '/users',
			icon: (
				<svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z'
					/>
				</svg>
			),
		},
		{
			title: 'Product types',
			href: '/product-types',
			icon: (
				<svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
					/>
				</svg>
			),
		},
		{
			title: 'Products',
			href: '/products',
			icon: (
				<svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
					/>
				</svg>
			),
		},
		{
			title: 'Orders',
			href: '/orders',
			icon: (
				<svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
					/>
				</svg>
			),
		},
		{
			title: 'Settings',
			href: '/settings',
			icon: (
				<svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
					/>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
					/>
				</svg>
			),
		},
	];

	return (
		<aside className='w-64 h-full bg-slate-900 border-r border-slate-700 shadow-xl'>
			<div className='p-6'>
				{/* Navigation Header */}
				<div className='mb-8'>
					<h2 className='text-lg font-semibold text-white mb-2'>Navigation</h2>
					<div className='h-px bg-gradient-to-r from-blue-500 to-purple-600'></div>
				</div>

				{/* Main Navigation */}
				<nav className='space-y-2'>
					{navigationItems.map((item, index) => (
						<Link
							key={index}
							href={item.href}
							className='group flex items-center px-4 py-3 text-sm font-medium text-slate-300 rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-md'
						>
							<span className='mr-3 text-slate-400 group-hover:text-blue-400 transition-colors'>
								{item.icon}
							</span>
							{item.title}
							<span className='ml-auto opacity-0 group-hover:opacity-100 transition-opacity'>
								<svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M9 5l7 7-7 7'
									/>
								</svg>
							</span>
						</Link>
					))}
				</nav>
			</div>
		</aside>
	);
};

export default Sidebar;
