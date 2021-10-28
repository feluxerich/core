import platform from 'platform';

export const isAndroid = platform.os?.family === 'Android';
export const isApple = platform.manufacturer === 'Apple';
export const isIOS = platform.os?.family === 'iOS';
export const isLinux = platform.os?.family === 'Linux' || platform.os?.family === 'Ubuntu';
export const isMacOS = platform.os?.family === 'macOS';
export const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
export const isWindows = platform.os?.family === 'Windows';

export const Platform = {
  architecture: platform.os?.architecture,
  family: platform.os?.family,
  manufacturer: platform.manufacturer,
};

export default platform;
