import { GetSkills } from '@controllers/Notion'

export async function SkillList() {
	const skills = await GetSkills()

	return (
		<ul className='flex flex-wrap gap-4 px-4 justify-evenly'>
			{skills
				.filter((s) => s.isFavorite)
				.map((skill, index) => (
					<li key={index} className='flex space-x-4 items-center backdrop-blur-sm rounded-full px-4 py-2'>
						<figure className='relative bg-transparent'>
							<img
								src={skill.imageUrl}
								alt={'Logo de ' + skill.label}
								className='size-8 object-contain mix-blend-multiply rounded'
							/>
						</figure>
						<p className='font-sans text-stone-100 font-semibold'>{skill.label}</p>
					</li>
				))}
		</ul>
	)
}
