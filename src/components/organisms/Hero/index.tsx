import styles from './Hero.module.css'
import {FC} from 'react'

export const Hero: FC<any> = () => {
	return (
		<section className={styles.hero}>
			<h1 className={styles.hero__title}>Hugo Derigny</h1>
			<h2 className={styles.hero__subtitle}>Ingénieur web fullstack</h2>
			<nav className={styles.navbar}>
				<ul>
					<li className={styles.navbar__li}>
						<a href='#projets'>
							Projets
						</a>
					</li>
					<li className={styles.navbar__li}>
						<a href='#experiences'>
							Expériences
						</a>
					</li>
					<li className={styles.navbar__li}>
						<a href='#stack'>
							Stack
						</a>
					</li>
					<li className={styles.navbar__li}>
						<a href='#contact'>
							Contact
						</a>
					</li>
					<li className={styles.navbar__li}>
						<a
							href='https://github.com/HugoDerigny'
							target='_blank'
							rel='noreferrer noopener'
						>
							GitHub
						</a>
					</li>
				</ul>
			</nav>
		</section>
	)
}
