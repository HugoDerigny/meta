'use client'

import { ReactNode, useEffect, useState } from 'react'
import { cs } from '../utils'
import Link from 'next/link'
import { TextDecoration } from '@components/TextDecoration'

export function Sidemenu() {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	useEffect(() => {
		function toggleOff(e: KeyboardEvent) {
			if (e.key === 'Escape') {
				setIsOpen(false)
			}
		}

		document.addEventListener('keydown', toggleOff)

		return () => {
			document.removeEventListener('keydown', toggleOff)
		}
	}, [])

	return (
		<>
			<button
				type='button'
				name='open-menu'
				onClick={() => setIsOpen(true)}
				className='fixed top-4 left-4 text-stone-200 text-7xl z-20'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='36'
					height='36'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='text-stone-200'
				>
					<line x1='3' y1='12' x2='21' y2='12'></line>
					<line x1='3' y1='6' x2='21' y2='6'></line>
					<line x1='3' y1='18' x2='21' y2='18'></line>
				</svg>
			</button>
			<aside
				hidden={!isOpen}
				className={cs(
					'max-w-sm z-20 backdrop-blur fixed inset-0 h-dvh overflow-hidden',
					isOpen && 'reveal-text',
				)}
			>
				<h2 className='text-4xl text-stone-50 px-8 pt-16'>Navigation</h2>
				<button
					className='text-stone-500 px-8 py-2 hover:text-cyan-800 transition-all'
					type='button'
					onClick={() => setIsOpen(false)}
				>
					refermer
				</button>
				<TextDecoration text='Navigation' />
				<nav className='text-stone-200 p-8 pt-16 text-2xl flex flex-col space-y-8 hover:before:*:pr-4 before:*:transition-all before:*:content-["#"] before:*:pr-2 before:*:text-stone-500 before:*:text-lg'>
					<Link onClick={() => setIsOpen(false)} href='/#presentation'>
						présentation
					</Link>
					<Link onClick={() => setIsOpen(false)} href='/#experiences'>
						expériences
					</Link>
					<Link onClick={() => setIsOpen(false)} href='/#projets'>
						projets
					</Link>
					<Link onClick={() => setIsOpen(false)} href='/#freelance'>
						freelance
					</Link>
				</nav>
			</aside>
		</>
	)
}
