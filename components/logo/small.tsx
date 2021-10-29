import { IoHardwareChip } from 'react-icons/io5';
import Link from 'next/link';

const Small = () => {
  return (
    <Link href="/" passHref>
      <div className="bg-primary-700 rounded-15 grid place-items-center w-full cursor-pointer relative" style={{ aspectRatio: '1 / 1' }}>
        <IoHardwareChip style={{ height: '28.45px', width: '28.45px' }} />
      </div>
    </Link>
  );
};

export default Small;
