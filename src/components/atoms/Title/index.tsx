import styles from './Title.module.css'
import { FC } from 'react'
import { computeStyles } from '../../../utils'

interface Props {
	black?: boolean
}

export const Title: FC<Props> = ({ children, black }) => {
	return <h1 className={computeStyles(styles.title, black ? styles.title__dark : styles.title__light)}>{children}</h1>
}
