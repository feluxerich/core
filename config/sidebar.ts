import Sidebar from '@components/logo/small';
import { SidebarItemProps, SidebarProps } from '@Types/config';
import { sortByKey } from '@utils/array';

export const sidebar: SidebarProps = {
  top: {
    logo: [
      {
        custom: Sidebar,
      },
    ],
    applications: sortByKey(
      [
        {
          icon: 'IoQrCodeOutline',
          name: 'QR Code Generator',
          route: '/qrcode',
        },
        {
          icon: 'IoStatsChartOutline',
          name: 'Covid-19',
          route: '/covid/germany',
        },
        {
          icon: 'IoLockClosedOutline',
          name: 'Password Generator',
          route: 'https://pw.m2vi.me/',
          external: true,
        },
        {
          icon: 'IoGlobeOutline',
          name: 'IP',
          route: 'https://ip.m2vi.me/',
          external: true,
        },
        {
          icon: 'IoTimeOutline',
          name: 'Clocks',
          route: '/clocks',
        },
        {
          icon: 'IoCubeOutline',
          name: 'HyPixel',
          route: '/minecraft/hypixel',
        },
        {
          icon: 'IoDocumentTextOutline',
          name: 'Word Counter',
          route: 'https://wordcounter.m2vi.me/',
          external: true,
        },
      ] as SidebarItemProps[],
      'name',
    ),
  },
  bottom: {
    settings: [
      {
        icon: 'IoEllipsisHorizontalOutline',
        name: 'Settings',
        route: '/settings',
      },
      {
        icon: 'IoChevronForwardOutline',
        name: 'Expand',
        route: '/',
      },
      {
        icon: 'IoExitOutline',
        name: 'Logout',
        route: '/api/auth/destroy',
      },
    ],
  },
};
