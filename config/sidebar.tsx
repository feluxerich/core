import { SidebarProps } from '@Types/config';
import {
  IoChevronForwardOutline,
  IoEllipsisHorizontalOutline,
  IoGlobeOutline,
  IoHardwareChip,
  IoLockClosedOutline,
  IoQrCodeOutline,
  IoStatsChartOutline,
} from 'react-icons/io5';

export const sidebar: SidebarProps = {
  top: {
    logo: [
      {
        custom: () => (
          <div className="bg-primary-700 rounded-15 grid place-items-center w-full cursor-pointer relative" style={{ aspectRatio: '1 / 1' }}>
            <IoHardwareChip style={{ height: '28.45px', width: '28.45px' }} />
          </div>
        ),
      },
    ],
    applications: [
      {
        icon: IoQrCodeOutline,
        name: 'QR Code Generator',
        route: '/',
      },
      {
        icon: IoStatsChartOutline,
        name: 'Statistics',
        route: '/',
      },
      {
        icon: IoLockClosedOutline,
        name: 'Password Generator',
        route: '/',
      },
      {
        icon: IoGlobeOutline,
        name: 'IP',
        route: 'ip.m2vi.me',
        external: true,
      },
    ],
  },
  bottom: {
    settings: [
      {
        icon: IoEllipsisHorizontalOutline,
        name: 'Settings',
        route: '/settings',
      },
      {
        icon: IoChevronForwardOutline,
        name: 'Expand',
        route: '/',
      },
    ],
  },
};
