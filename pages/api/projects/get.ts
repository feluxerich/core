import projectSchema from '@models/projectSchema';
import { connectToDatabase } from '@utils/database';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const connection = await connectToDatabase();
    if (connection?.readyState !== 1) return res.status(500).json({ error: 'Database error' });

    var data = await projectSchema.find({})

    res.status(200).json(data)
}
