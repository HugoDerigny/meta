import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative, Scrollbar, Keyboard, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-creative'
import 'swiper/css/scrollbar'
import Image from 'next/image'
import { Title } from '@components/atoms'
import { ProjectType } from '@controllers/Notion/types'

interface ProjectsProps {
	projects: ProjectType[]
}

export const Projects: FC<ProjectsProps> = ({ projects }) => {
	return (
		<div className='flex place-items-center'>
			<div
				id='previous-slide'
				className='relative text-gray-800 cursor-pointer hover:scale-125 ease-out transition-all'
			>
				<svg className='w-12 h-12' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
					<path
						fillRule='evenodd'
						d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
						clipRule='evenodd'
					/>
				</svg>
			</div>
			<Swiper
				effect={'creative'}
				creativeEffect={{
					prev: {
						shadow: true,
						translate: [0, 0, -400],
					},
					next: {
						translate: ['100%', 0, 0],
					},
				}}
				grabCursor
				scrollbar={{ hide: true }}
				navigation={{
					prevEl: '#previous-slide',
					nextEl: '#next-slide',
				}}
				keyboard={{ enabled: true }}
				modules={[EffectCreative, Keyboard, Scrollbar, Navigation]}
				className='flex place-items-center'
			>
				{projects.map((project, key) => (
					<SwiperSlide key={key}>
						<ProjectCard project={project} />
					</SwiperSlide>
				))}
			</Swiper>
			<div
				id='next-slide'
				className='relative text-gray-800 cursor-pointer hover:scale-125 ease-out transition-all'
			>
				<svg className='w-12 h-12' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
					<path
						fillRule='evenodd'
						d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
						clipRule='evenodd'
					/>
				</svg>
			</div>
		</div>
	)
}

interface ProjectProps {
	project: ProjectType
}

const ProjectCard: FC<ProjectProps> = ({ project }) => {
	return (
		<section className='bg-gray-100 rounded-xl p-6 flex gap-4'>
			<figure className='object-cover w-1/3 flex-shrink-0 aspect-video relative'>
				<Image
					src={project?.imageUrl ?? 'https://via.placeholder.com/1920x1080'}
					layout={'fill'}
					className='rounded-xl'
				/>
			</figure>
			<article>
				<Title black>{project.title}</Title>
				<p className='text-gray-700'>{project.summary}</p>
				<p className='text-gray-500 text-xs mt-8 mb-2'>Tags</p>
				<div className='flex gap-2'>
					{project.tags.map((label, key) => (
						<span key={key} className='rounded-full bg-gray-200 px-2 py-1 text-xs'>
							{label}
						</span>
					))}
				</div>
			</article>
		</section>
	)
}
