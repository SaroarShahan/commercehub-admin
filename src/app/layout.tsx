import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import Header from '~/layouts/header';
import Sidebar from '~/layouts/sidebaar';

import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Commerce Admin',
	description: 'Admin panel for Commerce',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Header />
				<div className='grid grid-cols-[auto_1fr] min-h-[calc(100vh-4rem)]'>
					<Sidebar />
					<main className='p-4'>{children}</main>
				</div>
			</body>
		</html>
	);
}
