import { ExperienceBackground } from './ExperienceBackground'
import { TextDecoration } from '@components/TextDecoration'
import { ExperienceList } from '@components/ExperienceList'

export function Experience() {
	return (
		<section id='experiences' className='py-16 min-h-dvh bg-stone-950 text-stone-200 relative overflow-hidden'>
			<ExperienceBackground />
			<TextDecoration text='Expérience' />
			<article className='z-10 relative'>
				<h3 className='text-4xl pb-4 text-stone-200 px-8 md:px-16 lg:px-32 xl:px-64'>
					Expériences professionnelles
				</h3>
				<ExperienceList />
			</article>
		</section>
	)
}
