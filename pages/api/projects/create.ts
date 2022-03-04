import projectSchema from '@models/projectSchema';
import { connectToDatabase } from '@utils/database';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const connection = await connectToDatabase();
    if (connection?.readyState !== 1) return res.status(500).json({ error: 'Database error' });
    const { id, key, name, route, desc, tags, language, owner, type, url } = JSON.parse(req.body) as any;

    console.log(id, key, name, route, desc, tags, language, owner, type, url)
    
    if (!id || !key || !name || !route || !desc || !tags || !language || !owner || !type || !url) return res.status(400).json({ error: 'Missing params' });
    
    const obj = new projectSchema({
        id,
        key,
        name,
        route,
        desc,
        tags: tags.split(";"),
        language: language.split(";"),
        repository: {
            type,
            url
        },
        owner
    })

    await obj.save()

    res.status(200).json({
        message: "Successful created project"
    })
}
