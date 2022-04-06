import styles from './Subtitle.module.css'
import { FC } from 'react'
import { computeStyles } from '../../../utils'

interface Props {
	black?: boolean
}

export const Subtitle: FC<Props> = ({ children, black }) => {
	return (
		<h2 className={computeStyles(styles.subtitle, black ? styles.subtitle__dark : styles.subtitle__light)}>
			{children}
		</h2>
	)
}

export default Subtitle
