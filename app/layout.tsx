import 'styles/globals.css'
import localFont from 'next/font/local'
import { Rubik } from 'next/font/google'
import { cs } from '../src/utils'

const custom = Rubik({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-custom',
})

const myFont = localFont({
	src: '../src/assets/lineal-main/Lineal-Bold.woff2',
	display: 'swap',
})

export const metadata = {
	title: 'Hugo DERIGNY - Portfolio',
	description:
		'Portfolio de Hugo DERIGNY, développeur web fullstack. Découvrez mes projets, mes compétences et mon parcours. Vous avez un projet à réaliser ? Contactez-moi !',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='fr' className={cs(myFont.className, custom.variable)}>
			<body className='relative'>{children}</body>
		</html>
	)
}
