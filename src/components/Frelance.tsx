import { TextDecoration } from '@components/TextDecoration'
import { FreelanceBackground } from '@components/FreelanceBackground'
import Link from 'next/link'

export function Freelance() {
	return (
		<section id='freelance' className='py-16 min-h-dvh bg-stone-950 text-stone-200 relative overflow-hidden'>
			<FreelanceBackground />
			<TextDecoration text='Freelance' />
			<article className='z-10 relative px-8 md:px-16 lg:px-32 xl:px-64'>
				<h3 className='text-4xl pb-4 text-stone-200'>Vous souhaitez réaliser un projet ?</h3>
				<p className='font-sans leading-relaxed'>
					Je suis disponible pour des missions de développement web. Prenez contact avec moi pour discuter de
					votre projet et en étudier la faisabilité. Je vous proposerai un devis adapté à vos besoins pour
					chacunes des formules ci-dessous.
				</p>
				<section className='grid md:grid-cols-2 gap-4 pt-4 font-sans'>
					<article className='p-4 text-stone-200 backdrop-blur-lg rounded-lg shadow-xl border border-stone-400'>
						<h4 className='text-2xl tracking-tight font-bold'>Essentiel Pro</h4>
						<ul className='list-disc list-inside pt-4 text-sm text-stone-200'>
							<li>Développement complet du site web, conforme aux besoins spécifiés.</li>
							<li>Livraison du site dans les délais convenus.</li>
							<li>Maintenance de base assurée, y compris les mises à jour de sécurité régulières.</li>
							<li>
								Échanges périodiques pour s'assurer de votre satisfaction et aborder des éventuelles
								questions.
							</li>
						</ul>
					</article>
					<article className='p-4 bg-amber-700/20 backdrop-blur border border-amber-400 rounded shadow-lg'>
						<h4 className='text-2xl tracking-tight font-bold'>✨Évolution Pro</h4>
						<ul className='list-disc list-inside pt-4 text-sm text-stone-200'>
							<li>Développement complet du site web avec des fonctionnalités évolutives.</li>
							<li>Livraison du site dans les délais convenus.</li>
							<li>
								Maintenance complète, y compris mises à jour de sécurité, optimisations et sauvegardes
								régulières.
							</li>
							<li>Soutien technique continu avec un temps de réponse rapide.</li>
							<li className='text-amber-400 font-semibold'>
								Possibilité de revenir sur le site pour des évolutions, mises à jour et ajustements au
								fil du temps.
							</li>
						</ul>
					</article>
				</section>
				<Link
					target='_blank'
					href='mailto:hugo.derigny@gmail.com'
					rel='noreferer noopener'
					className='px-4 py-2 mt-8 text-stone-200 text-lg block'
				>
					&lt; Me contacter (hugo.derigny@gmail.com) &gt;
				</Link>
			</article>
		</section>
	)
}
