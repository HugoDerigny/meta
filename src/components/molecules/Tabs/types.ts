export interface TabsPropsType {
	values: string[]
	onChange?: (key: string) => void
}

export interface TabPropsType {
	value: string
	onClick: (key: string) => void
	active: boolean
}
