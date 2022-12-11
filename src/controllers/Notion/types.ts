export type RichTextType = Array<{ plain_text: string, annotations: { bold: boolean, italic: boolean, underline: boolean }}>

export interface ProjectType {
	url: string
	title: string
	imageUrl: string
	summary: string
	tags: string[]
	group: string
}

export interface SkillType {
	label: string
	imageUrl: string
	isFavorite: boolean
}

export interface ExperienceType {
	label: string
	from: string
	to: string
	company: string
	summary: RichTextType
	companyLogo: string
}