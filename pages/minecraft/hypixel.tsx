import { useState } from 'react';
import Image from 'next/image';
import { Full } from '@components/Full';

function Hypixel() {
  var sendRequest = async () => {
    var response = await fetch(`/api/minecraft/hypixel?name=${value}`);
    try {
      setData((await response.json()).data);
    } catch (_) {}
  };

  const [value, setValue] = useState('');
  const [data, setData] = useState({ id: '76846c1e164c4d9fb0427dc5566c1e98' } as any);

  const handleChange = (e: any) => {
    setValue(e.currentTarget.value);
  };

  return (
    <Full className="flex items-center justify-center">
      <div className="container flex flex-col items-center ">
        <div className="flex items-center w-full max-w-sm py-2 border-b border-primary-600">
          <input
            className="w-full px-2 py-1 mr-3 leading-tight bg-transparent border-none appearance-none primary-900 focus:outline-no-chrome"
            type="text"
            placeholder="Username"
            aria-label="Username"
            value={value}
            onChange={handleChange}
          />
          {/* FIXME: Style */}
          <button
            className="flex-shrink-0 px-2 py-1 text-sm bg-transparent border rounded-5 text-primary-600 border-primary-600 hover:bg-primary-800 hover:text-white"
            type="submit"
            onClick={sendRequest}
          >
            Lookup
          </button>
        </div>
        <div className="flex flex-row w-full h-64 max-w-xl mt-6 border rounded-lg bg-primary-800 border-primary-600 p-7">
          <div className="h-full rounded-lg mr-9" style={{ aspectRatio: '1/1' }}>
            <Image
              className="w-full h-full rounded-lg"
              src={`https://crafatar.com/avatars/${data?.id}`}
              alt="profile-head"
              height={200}
              width={200}
            />
          </div>
          <div className="flex flex-col w-full h-full font-bold text-white">
            <p className="mb-4 text-2xl">{data?.name}</p>
            <span className="flex items-center text-sm">
              Status: <div className={`h-3 w-3 rounded-full ml-2 ${data?.status === false ? 'bg-default' : 'bg-green-600'}`} />
            </span>
            <span className="text-sm">
              Rank: <span className="font-normal">{data?.rank ? data.rank.replace('_', '').replace('PLUS', '+') : 'No Rank'}</span>
            </span>
            <span className="text-sm">
              Guild: <span className="font-normal">{data?.guild ? data.guild : 'No Guild'}</span>
            </span>
          </div>
        </div>
      </div>
    </Full>
  );
}

export default Hypixel;
