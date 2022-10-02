import styles from './Hero.module.css'
import {FC} from 'react'
import {computeStyles} from '../../../utils'

export const Hero: FC<any> = () => {
	return (
		<section className={styles.hero}>
			<h1 className={styles.hero__title}>Hugo Derigny</h1>
			<h2 className={styles.hero__subtitle}>Ingénieur web fullstack et product owner</h2>
			<nav className={styles.navbar}>
				<ul>
					<li className={computeStyles(styles.navbar__li, styles.navbar__li__first)}>
						<a href='#articles' className={styles.navbar__link}>
							Articles
						</a>
					</li>
					<li className={computeStyles(styles.navbar__li, styles.navbar__li__second)}>
						<a href='#projets' className={styles.navbar__link}>
							Projets
						</a>
					</li>
					<li className={styles.navbar__li}>
						<a href='#stack' className={styles.navbar__link}>
							Stack
						</a>
					</li>
					<li className={styles.navbar__li}>
						<a href='#contact' className={styles.navbar__link}>
							Contact
						</a>
					</li>
					<li className={styles.navbar__li}>
						<a
							href='https://github.com/HugoDerigny'
							className={styles.navbar__link}
							target='_blank'
							rel='noreferrer noopener'
						>
							GitHub
						</a>
					</li>
					<hr className={styles.navbar__slider} />
				</ul>
			</nav>
		</section>
	)
}
