import { TextDecoration } from '@components/TextDecoration'
import { ProjectBackground } from '@components/ProjectBackground'
import { ProjectList } from '@components/ProjectList'
import { ExperienceBackground } from '@components/ExperienceBackground'
import { ExperienceList } from '@components/ExperienceList'

export function Project() {
	return (
		<section id='projets' className='py-16 w-screen min-h-dvh bg-stone-950 text-stone-200 relative overflow-hidden'>
			<ProjectBackground />
			<TextDecoration text='Projets' />
			<article className='z-10 relative'>
				<h3 className='text-4xl pb-4 text-stone-200 px-8 md:px-16 lg:px-32 xl:px-64'>Projets</h3>
				<ProjectList />
			</article>
		</section>
	)
}
