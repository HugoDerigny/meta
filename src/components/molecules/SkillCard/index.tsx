import { FC } from 'react'
import styles from './SkillCard.module.css'

interface Props {}

export const SkillCard: FC<Props> = ({ children }) => {
	return <p className={styles.skill_card}>{children}</p>
}

export default SkillCard
