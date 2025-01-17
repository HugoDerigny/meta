import { TextDecoration } from '@components/TextDecoration'

export function Footer() {
	return (
		<footer
			id='footer'
			style={{ backgroundImage: 'url(/assets/noise.svg)' }}
			className='py-16 bg-stone-950 text-stone-200 px-8 md:px-16 lg:px-32 xl:px-64 relative overflow-hidden'
		>
			<TextDecoration text='Merci' />
			<p>Hugo DERIGNY © 2025</p>
			<p className='font-sans text-xs text-stone-500'>À l'aide de Next.JS / TailwindCSS</p>
		</footer>
	)
}
