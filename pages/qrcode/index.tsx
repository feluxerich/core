import type { NextPage } from 'next';
import { useState } from 'react';
import Image from 'next/image';

const QrCode: NextPage = () => {
  const [data, setData] = useState('https://dev.core.fluxi.ml/');

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${data}&ecc=H&margin=0&format=svg`;

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="grid w-1/2 h-auto grid-cols-2 gap-4">
        <div className="grid grid-cols-1 gap-3">
          <textarea
            className="w-full h-full p-3 bg-transparent border resize-none border-primary-600 rounded-5"
            onChange={e => setData(e.currentTarget.value)}
            placeholder="QR-Code Data"
          />
        </div>
        <div style={{ aspectRatio: '1/1' }} className="w-full h-full border border-primary-600 rounded-5 text-primary-500">
          <Image alt="QR-Code" src={qrUrl} width="100" height="100" layout="responsive" className="cursor-pointer rounded-5" />
        </div>
      </div>
    </div>
  );
};

export default QrCode;
