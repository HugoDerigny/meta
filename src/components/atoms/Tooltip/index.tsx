import { FC } from 'react'
import styles from './Tooltip.module.css'

type Props = {
	content: string
	offset?: number | string
}

export const Tooltip: FC<Props> = ({ offset, content, children }) => {
	return (
		<div className={styles.tooltipWrapper}>
			{children}
			<div className={styles.tooltip} style={{ marginBottom: `${offset ?? 2}rem` }}>
				<span className={styles.tooltip__message}>{content}</span>
				<div className={styles.tooltip__arrow} />
			</div>
		</div>
	)
}
