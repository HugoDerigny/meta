import { FC, useState } from 'react'
import { TabPropsType, TabsPropsType } from './types'
import styles from './Tabs.module.css'
import { computeStyles } from '../../../utils'

export const Tabs: FC<TabsPropsType> = ({ values, onChange: componentCallback }) => {
	const [selectedTab, setSelectedTab] = useState<string>(values[0])

	return (
		<ul className={styles.tabs}>
			{values.map((value) => (
				<Tab
					key={value}
					value={value}
					onClick={(key: string) => {
						setSelectedTab(key)
						componentCallback(key)
					}}
					active={selectedTab === value}
				>
					{value}
				</Tab>
			))}
		</ul>
	)
}

const Tab: FC<TabPropsType> = ({ value, children, onClick, active }) => {
	return (
		<li className={computeStyles(styles.tab, active ? styles.active : null)}>
			<a href={`#${value}`} onClick={() => onClick(value)}>
				{children}
			</a>
		</li>
	)
}
