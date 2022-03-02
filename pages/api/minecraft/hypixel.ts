import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  data?: {
    name?: string;
    id?: string;
    rank?: string;
    status?: any;
    guild?: string;
  };
  error?: string;
};

async function hypixel(req: NextApiRequest, res: NextApiResponse<Data>) {
  const hypixelAPIKey = process.env.HYPIXEL_API_KEY;

  const query = Object.freeze(req.query);
  const name = query.name.toString();

  try {
    var data = await (await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`)).json();

    var uuid = data?.id;

    const params = `key=${hypixelAPIKey}&uuid=${uuid}&player=${uuid}`;

    var player = await (await fetch(`https://api.hypixel.net/player?${params}`)).json();
    var status = await (await fetch(`https://api.hypixel.net/status?${params}`)).json();
    var guild = await (await fetch(`https://api.hypixel.net/guild?${params}`)).json();

    data = {
      name: data?.name,
      id: uuid,
      rank: player.player?.newPackageRank,
      status: status.session?.online,
      guild: guild?.guild?.name,
    };

    res.status(200).json({ data });
  } catch (_) {
    res.status(404).json({ error: 'Data not found' });
  }
}

export default hypixel;
