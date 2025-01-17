import Link from 'next/link'
import Image from 'next/image'

export function ProjectList() {
	const projects = [
		{
			url: 'https://catalogue.tabuleo.com',
			cover: '/img/catalogue.png',
			title: 'Catalogue de manuels et ressources numériques',
			description: 'Site vitrine qui permet aux établissements scolaires de créer des listes avec des manuels scolaires, et d’effectuer des demandes de devis à Tabuleo.',
			tags: ['Next.JS', 'Typescript', 'Docker']
		},
		{
			url: 'https://quizeo.com',
			cover: '/img/quizeo.png',
			title: 'Quizéo - Plateforme de création de contenu',
			description: 'Quizéo est une plateforme que j’ai conçu et réalisé. Sur cette plateforme, les enseignants peuvent réaliser des cours et des quiz qui se composent de ressources granulaires.',
			tags: ['Next.JS', 'NestJS', 'Kubernetes', 'Micro-services', 'Gestion de projet']
		},
		{
			url: 'https://support.tabuleo.com',
			cover: '/img/support.png',
			title: 'Outil de ticketing pour les clients de Tabuléo',
			description: 'Outil de ticketing sur mesure pour les clients de Tabuléo. Les clients peuvent ouvrir des tickets, et les équipes de Tabuléo peuvent leur répondre.',
			tags: ['Next.JS', 'Typescript', 'Docker', 'PostgreSQL']
		},
		{
			url: 'https://music.derigny.dev',
			cover: '',
			title: 'Beatmaking',
			description: 'Un site réalisé from scratch où je publie mes musiques que je réalise sur FL Studio. Il s’agit principalement de beats trap, mais aussi d’autres styles en tout genre.',
			tags: ['React', 'Typescript', 'Web Audio API']
		}
	]

	return (
		<section className='flex overflow-auto snap-x snap-mandatory gap-4 pb-8 px-8 md:px-16 lg:px-32 xl:px-64'>
			{projects.map((project, index) => (
				<Link
					href={project.url}
					target='_blank'
					key={index}
					className='w-5/6 h-fit block snap-center md:w-1/3 shrink-0 bg-stone-50/5 text-stone-100 backdrop-blur-lg rounded-lg shadow-xl border border-stone-100/25'
				>
					{project.cover && (
						<figure className='w-full h-auto overflow-hidden rounded-t-lg bg-white/20 backdrop-blur relative'>
							<Image
								width='640'
								height='360'
								quality={50}
								src={project.cover}
								alt="Image d'illustration du projet"
								className='object-cover aspect-video h-full w-full'
								loading='lazy'
							/>
						</figure>
					)}
					<header className='p-3'>
						<h3 className='text-2xl font-sans pb-2 text-white font-extrabold tracking-tight'>{project.title}</h3>
					</header>
					<article className='text-sm whitespace-normal font-sans text-justify leading-relaxed p-3 pb-6 pt-0'>
						{project.description}
					</article>
					<footer className='px-3 pb-3 font-sans'>
						<ul className='flex flex-wrap gap-2'>
							{project.tags.map((tag, idx) => (
								<li key={idx} className='bg-stone-100/15 text-stone-100 rounded-full px-2 py-1 text-xs'>
									{tag}
								</li>
							))}
						</ul>
					</footer>
				</Link>
			))}
		</section>
	)
}
