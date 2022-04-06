import { Client } from '@notionhq/client'
import { ProjectType, SkillType } from './types'
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'

const { NOTION_API_KEY: auth } = process.env

const notion = new Client({ auth })

export async function GetProjects(): Promise<ProjectType[]> {
	try {
		const response: QueryDatabaseResponse = await notion.databases.query({
			database_id: 'd8e86bc7150e45a8b4f8f792204aba80',
			filter: { property: 'Visible', checkbox: { equals: true } },
		})
		// @ts-ignore
		return response.results.map(({ properties: { Name, Groupe, Description, Image, Tags } }) => ({
			title: Name.title[0].text.content,
			group: Groupe.select.name,
			summary: Description.rich_text[0].text.content,
			imageUrl: Image.files[0]?.external?.url ?? Image.files[0]?.file?.url,
			tags: Tags.multi_select.map(({ name }) => name),
		}))
	} catch (e) {
		return []
	}
}

export async function GetSkills(): Promise<SkillType[]> {
	try {
		const response: QueryDatabaseResponse = await notion.databases.query({
			database_id: '5d18692552f54f55b02287d9823011fe',
			filter: { property: 'Visible', checkbox: { equals: true } },
		})

		// @ts-ignore
		return response.results.map(({ properties: { Label, Image, IsFavorite } }) => ({
			label: Label.title[0].text.content,
			imageUrl: Image.files[0]?.external?.url ?? Image.files[0]?.file?.url,
			isFavorite: IsFavorite.checkbox ?? false,
		}))
	} catch (e) {
		return []
	}
}
