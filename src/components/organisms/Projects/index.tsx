import React, {FC, useState} from 'react'
import {ProjectType} from '@controllers/Notion/types'
import {ProjectCard} from '@components/molecules'

interface ProjectsProps {
	projects: ProjectType[]
}

export const Projects: FC<ProjectsProps> = ({ projects }) => {
	const [showMore, setShowMore] = useState<boolean>(false)

	return (
		<div className='flex flex-wrap -mx-4'>
			{(showMore ? projects : projects.slice(0, 6)).map((project, key) => (
				<div key={key} className='w-1/3 p-4 shrink-0'>
					<ProjectCard project={project} />
				</div>
			))}
		</div>
	)
}
