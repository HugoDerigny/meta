import Image from 'next/image'

export async function SkillList() {
	const skills = [
		{
			isFavorite: true,
			imageUrl: '/img/nextjs.png',
			label: 'Next.JS'
		},
		{
			isFavorite: true,
			imageUrl: '/img/NestJS.svg',
			label: 'NestJS'
		},
		{
			isFavorite: true,
			imageUrl: '/img/tailwind.png',
			label: 'TailwindCSS'
		},
		{
			isFavorite: true,
			imageUrl: '/img/typescript.png',
			label: 'Typescript'
		},
		{
			isFavorite: true,
			imageUrl: '/img/webstorm.png',
			label: 'Webstorm'
		},
		{
			imageUrl: '/img/sass.png',
			label: 'SASS'
		},
		{
			imageUrl: '/img/reactjs.png',
			label: 'React.JS'
		},
		{
			imageUrl: '/img/postgresql.png',
			label: 'PostgreSQL'
		},
		{
			imageUrl: '/img/mongodb.webp',
			label: 'MongoDB'
		},
		{
			imageUrl: '/img/mysql.png',
			label: 'MySQL'
		},
		{
			imageUrl: '/img/github.svg',
			label: 'GitHub'
		}
	]

	return (
		<ul className='flex flex-wrap gap-4 px-4 justify-evenly'>
			{skills
				.filter((s) => s.isFavorite)
				.map((skill, index) => (
					<li key={index} className='flex space-x-4 items-center backdrop-blur-sm rounded-full px-4 py-2'>
						<figure className='relative bg-transparent'>
							<Image
								width={32}
								height={32}
								src={skill.imageUrl}
								alt={'Logo de ' + skill.label}
								className='size-8 object-contain mix-blend-multiply rounded'
							/>
							<figcaption className='sr-only'>Logo de {skill.label}</figcaption>
						</figure>
						<p className='font-sans text-stone-100 font-semibold'>{skill.label}</p>
					</li>
				))}
		</ul>
	)
}
