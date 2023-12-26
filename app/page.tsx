import { Landing } from '@components/Landing'
import { Presentation } from '@components/Presentation'
import { Sidemenu } from '@components/Sidemenu'
import { Experience } from '@components/Experience'
import { Project } from '@components/Project'
import { Footer } from '@components/Footer'
import { Freelance } from '@components/Frelance'

export default function Page() {
	return (
		<>
			<Sidemenu />
			<Landing />
			<Presentation />
			<Experience />
			<Project />
			<Freelance />
			<Footer />
		</>
	)
}
