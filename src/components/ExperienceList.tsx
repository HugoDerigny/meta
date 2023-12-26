import { GetExperiences } from '@controllers/Notion'
import { Fragment } from 'react'
import Image from 'next/image'
import { RichTextType } from '@controllers/Notion/types'

function parseNotionRichTextToHTML(richText: RichTextType) {
	const nodes = []

	for (const { annotations, plain_text } of richText) {
		switch (true) {
			case plain_text === '\n':
				nodes.push(<br />)
				break

			case annotations.bold:
				nodes.push(<strong>{plain_text}</strong>)
				break

			case annotations.italic:
				nodes.push(<i>{plain_text}</i>)
				break

			case annotations.underline:
				nodes.push(<u>{plain_text}</u>)
				break

			default:
				nodes.push(<span>{plain_text}</span>)
				break
		}
	}

	return (
		<p>
			{nodes.map((n, idx) => (
				<Fragment key={idx}>{n}</Fragment>
			))}
		</p>
	)
}

export async function ExperienceList() {
	const experiences = await GetExperiences()

	return (
		<ul className='flex overflow-auto pb-8 snap-x snap-mandatory gap-4 px-8 md:px-16 lg:px-32 xl:px-64'>
			{experiences.map((experience, index) => (
				<li
					key={index}
					className='w-5/6 h-fit snap-center md:w-1/3 shrink-0 text-stone-200 backdrop-blur-lg rounded-lg shadow-xl border border-stone-400'
				>
					{experience.companyLogo && (
						<figure className='w-full h-24 lg:h-32 py-4 rounded-t-lg bg-white/20 backdrop-blur relative'>
							<Image
								src={experience.companyLogo}
								alt="Logo de l'entreprise"
								className='object-contain'
								fill
								loading='lazy'
							/>
						</figure>
					)}
					<header className='p-4'>
						<h3 className='text-2xl font-sans pb-2 font-extrabold tracking-tight'>{experience.label}</h3>
						<p className='font-light uppercase text-xs tracking-wide text-cyan-500'>
							{experience.company} &bull;{' '}
							{new Date(experience.from).toLocaleDateString('fr-FR', {
								month: 'short',
								year: 'numeric',
							})}{' '}
							à {new Date(experience.to).toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' })}
						</p>
					</header>
					<article className='text-sm whitespace-normal font-sans text-justify leading-relaxed p-4'>
						{parseNotionRichTextToHTML(experience.summary)}
					</article>
				</li>
			))}
		</ul>
	)
}
