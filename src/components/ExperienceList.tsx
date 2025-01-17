import Image from 'next/image'

export function ExperienceList() {
	const experiences = [
		{
			label: 'Stage en développement web',
			company: 'Tabuléo - LNS Education',
			logo: '',
			from: new Date('05/06/2020'),
			to: new Date('07/03/2020'),
			summary: `⚙️ React - NextJS - Express
			
🎯 Missions

- Refonte du catalogue de l’entreprise en Next.JS.
- Veille technologique
			`
		},
		{
			label: 'Ingénieur web en apprentissage',
			company: 'Tabuléo - LNS Education',
			logo: '',
			from: new Date('09/14/2020'),
			to: new Date('09/15/2023'),
			summary: `⚙️ React - NextJS - Express - NestJS - TailwindCSS - Docker - PostgreSQL - MongoDB - Jira

🎯 Missions

- Maintenance des outils existants et développement de nouvelles fonctionnalités
- Veille technologique
- Architecture monolithique et microservices
- Accompagnement et formation de stagiaires de DUT et Licence Informatique

🌟 Quizéo (PFE)

- Écriture du cahier des charges
- Gestion de projet (analyse des risques, JIRA…)
- Conception et développement de la plateforme
- Participation au salon Educ@tech 2022 pour rencontrer de potentiels clients et faire la présentation du projet`
		},
		{
			label: 'Ingénieur web junior',
			company: 'Tamarin Education',
			logo: '',
			from: new Date('09/16/2012'),
			to: new Date(),
			summary: `⚙️ NextJS - NestJS - TailwindCSS - Docker - PostgreSQL - MongoDB - Jira - Kubernetes
			
🎯 Missions

- Maintenance des outils existants et développement de nouvelles fonctionnalités
- Veille technologique
- Architecture monolithique et microservices
- Accompagnement et formation de stagiaires de DUT et Licence Informatique

🌟 Quizéo (PFE)

- Écriture du cahier des charges
- Gestion de projet (analyse des risques, JIRA…)
- Conception et développement de la plateforme
- Participation au salon Educ@tech 2022 pour rencontrer de potentiels clients et faire la présentation du projet\`
`
		}
	]

	return (
		<ul className='flex overflow-auto pb-8 snap-x snap-mandatory gap-4 px-8 md:px-16 lg:px-32 xl:px-64'>
			{experiences.reverse().map((experience, index) => (
				<li
					key={index}
					className='w-5/6 h-fit snap-center md:w-1/3 shrink-0 text-stone-100 bg-stone-50/5 backdrop-blur-lg rounded-lg shadow-xl border border-stone-100/25'
				>
					{experience.logo && (
						<figure className='w-full h-24 lg:h-32 py-4 rounded-t-lg bg-white/20 backdrop-blur relative'>
							<Image
								src={experience.logo}
								alt="Logo de l'entreprise"
								className='object-contain'
								fill
								loading='lazy'
							/>
						</figure>
					)}
					<header className='p-3'>
						<h3 className='text-2xl font-sans pb-2 font-extrabold tracking-tight text-white'>{experience.label}</h3>
						<p className='font-light uppercase text-xs tracking-wide text-cyan-300'>
							{experience.company} &bull;{' '}
						</p>
						<p className='text-xs font-light text-cyan-100'>{new Date(experience.from).toLocaleDateString('fr-FR', {
							month: 'short',
							year: 'numeric'
						})}{' '}
							à {new Date(experience.to).toLocaleDateString('fr-FR', {
								month: 'short',
								year: 'numeric'
							})}</p>
					</header>
					<article className='p-3 font-sans text-sm leading-relaxed text-white whitespace-break-spaces'>
						{experience.summary}
					</article>
				</li>
			))}
		</ul>
	)
}
