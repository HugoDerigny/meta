// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {NextApiRequest, NextApiResponse} from 'next'
import {GetProjects, GetSkills} from '@controllers/Notion'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { method } = req

	switch (method) {
		case 'GET':
			return res.json({ blogs: [], projects: await GetProjects(), skills: await GetSkills() })

		default:
			return res.status(405).end()
	}
}
