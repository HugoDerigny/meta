import '../styles/globals.css'
import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Hugo DERIGNY | Portfolio</title>
				<meta name='description' content='Ingénieur web fullstack spécialisé en JS à Lille et ses alentours.' />
				<meta name='keywords' content='dev, react, fullstack, fr, hugo, derigny, nextjs, nestjs, nest' />
				<meta name='robots' content='index, follow' />
				<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
				<meta name='language' content='French' />
				<meta name='revisit-after' content='30 days' />
				<meta name='author' content='Hugo DERIGNY' />

				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
				<link rel='manifest' href='/manifest.json' />
				<meta name='msapplication-TileColor' content='#da532c' />
				<meta name='theme-color' content='#ffffff' />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
