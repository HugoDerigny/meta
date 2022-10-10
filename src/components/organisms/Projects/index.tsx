import React, {FC, useState} from 'react'
import {ProjectType} from '@controllers/Notion/types'
import {ProjectCard} from '@components/molecules'

interface ProjectsProps {
	projects: ProjectType[]
}

export const Projects: FC<ProjectsProps> = ({ projects }) => {
	const [showMore, setShowMore] = useState<boolean>(false)

	return (
		<div className='flex lg:flex-wrap overflow-auto -mx-8 px-8 snap-x'>
			{(showMore ? projects : projects.slice(0, 6)).map((project, key) => (
				<div key={key} className='w-full lg:w-1/3 shrink-0 p-4 snap-center'>
					<ProjectCard project={project} />
				</div>
			))}
		</div>
	)
}
