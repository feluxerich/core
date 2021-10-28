import { IoLockClosedOutline, IoQrCodeOutline, IoStatsChartOutline } from 'react-icons/io5';

export const sidebar = {
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
  ],
};
