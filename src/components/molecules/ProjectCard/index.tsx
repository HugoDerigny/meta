import {ProjectType} from '@controllers/Notion/types'
import React, {FC} from 'react'
import Image from 'next/image'

interface ProjectProps {
	project: ProjectType
}

export const ProjectCard: FC<ProjectProps> = ({ project }) => {
	return (
		<section className='bg-white shadow-xl rounded-xl p-6 flex flex-col gap-4 h-full'>
			<figure className='object-contain shrink-0 aspect-video relative'>
				<Image
					src={project?.imageUrl ?? 'https://via.placeholder.com/1920x1080'}
					layout='fill'
					className='rounded-lg'
					loading='lazy'
				/>
			</figure>
			<article className='flex flex-col space-y-4 h-full  justify-between'>
				<div>
					<h3 className='font-cursive text-2xl leading-relaxed'>
						{project.url ? (
							<a
								href={project.url}
								rel='noreferrer noopener'
								className='hover:text-teal-600 transition flex items-center'
								target='_blank'
							>
								{project.title}
								<span className='text-xs text-teal-600 pl-2'>
									<svg
										className='w-4 h-4'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
										/>
									</svg>
								</span>
							</a>
						) : (
							project.title
						)}
					</h3>
					<p className='text-gray-700 text-sm whitespace-normal text-justify leading-relaxed line-clamp-5'>
						{project.summary}
					</p>
				</div>
				<footer>
					<small className='block text-gray-500 text-xs mb-2'>Tags</small>
					<section className='flex gap-2 overflow-auto'>
						<span className='rounded-full bg-purple-200 text-purple-800 px-2 py-1 text-xs'>
							{project.group}
						</span>
						{project.tags.map((label, key) => (
							<span key={key} className='rounded-full whitespace-nowrap bg-gray-200 px-2 py-1 text-xs'>
								{label}
							</span>
						))}
					</section>
				</footer>
			</article>
		</section>
	)
}
