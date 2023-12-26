import { GetProjects } from '@controllers/Notion'
import Link from 'next/link'
import Image from 'next/image'

export async function ProjectList() {
	const projects = await GetProjects()

	return (
		<ul className='flex overflow-auto snap-x snap-mandatory gap-4 pb-8 px-8 md:px-16 lg:px-32 xl:px-64'>
			{projects.map((project, index) => (
				<Link
					href={project.url}
					target='_blank'
					key={index}
					className='w-5/6 h-fit block snap-center md:w-1/3 shrink-0 text-stone-200 backdrop-blur-lg rounded-lg shadow-xl border border-stone-400'
				>
					{project.imageUrl && (
						<figure className='w-full h-auto overflow-hidden rounded-t-lg bg-white/20 backdrop-blur relative'>
							<Image
								width='640'
								height='360'
								src={project.imageUrl}
								alt="Image d'illustration du projet"
								className='object-cover aspect-video h-full w-full'
								loading='lazy'
							/>
						</figure>
					)}
					<header className='p-4'>
						<h3 className='text-2xl font-sans pb-2 font-extrabold tracking-tight'>{project.title}</h3>
						<p className='font-light uppercase text-xs tracking-wide text-fuchsia-700'>{project.group}</p>
					</header>
					<article className='text-sm whitespace-normal font-sans text-justify leading-relaxed p-4 pt-0'>
						{project.summary}
					</article>
					<footer className='px-4 pb-4 font-sans'>
						<ul className='flex flex-wrap gap-2'>
							{project.tags.map((tag, idx) => (
								<li key={idx} className='bg-stone-400 text-stone-200 rounded-full px-2 py-1 text-xs'>
									{tag}
								</li>
							))}
						</ul>
					</footer>
				</Link>
			))}
		</ul>
	)
}
