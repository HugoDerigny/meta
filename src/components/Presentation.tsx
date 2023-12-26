import Image from 'next/image'
import gif from '../assets/Hugo DERIGNY.gif'
import Link from 'next/link'
import { TextDecoration } from '@components/TextDecoration'

export function Presentation() {
	return (
		<section
			id='presentation'
			style={{ backgroundImage: 'url(/assets/noise.svg)' }}
			className='py-16 min-h-dvh bg-stone-950 text-stone-200 px-8 md:px-16 lg:px-32 xl:px-64 relative overflow-hidden'
		>
			<TextDecoration text='Présentation' />
			<h3 className='text-4xl pb-4'>Bonjour !</h3>
			<article className='grid lg:grid-cols-2 gap-4'>
				<div className='space-y-2 *:leading-relaxed *:text-justify *:font-sans'>
					<p>
						Je viens de décrocher mon diplôme d'ingénieur en informatique à l'école IMT Nord Europe, une
						expérience qui a façonné ma compréhension approfondie des concepts informatiques et renforcé mes
						compétences en développement.
					</p>
					<p>
						D'origine compiègnoise, j'ai choisi de m'installer à Lille pour poursuivre mes études, une
						décision qui a enrichi ma vie académique et personnelle. Actuellement en quête d'un nouveau défi
						professionnel, je suis à la recherche d'un CDI en tant que développeur fullstack. Ma formation
						rigoureuse à IMT Nord Europe m'a permis de maîtriser les technologies les plus récentes et de
						développer des solutions informatiques innovantes. Je suis passionné par la résolution de
						problèmes complexes et la création de produits qui apportent une réelle valeur ajoutée.
					</p>
					<p>
						Lille est devenue ma deuxième maison et je souhaite continuer à y vivre et à y travailler pour
						construire mon avenir professionnel. Je suis ouvert à toutes les opportunités, que ce soit en
						tant que développeur full-remote ou en présentiel. Ma flexibilité géographique s'étend également
						aux opportunités à Paris, une ville que je considère également comme un lieu propice à
						l'épanouissement professionnel.
					</p>
				</div>
				<div className='py-4 mx-auto'>
					<Link
						target='_blank'
						href='/assets/Hugo%20DERIGNY.pdf'
						className='flex flex-col hover:shadow-[8px_8px_0px_0px_#712121] transition-all'
					>
						<figure className='relative w-72 h-96 bg-[#4300F6] self-start py-0'>
							<Image src={gif} fill alt='CV animé' className='object-fill' />
						</figure>
						<figcaption className='text-center bg-cyan-800 w-72 text-white py-2 font-sans'>
							Télécharger mon CV
						</figcaption>
					</Link>
				</div>
			</article>
		</section>
	)
}
