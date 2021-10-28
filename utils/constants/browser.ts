import platform from 'platform';

export const isBrave = async () => ((navigator as any).brave && (await (navigator as any).brave.isBrave())) || false;
export const isChrome = platform.name === 'Chrome' || platform.name === 'Chrome Mobile';
export const isEdge = platform.name === 'Edge';
export const isFirefox = platform.name === 'Firefox';
export const isIE = 'ActiveXObject' in window;
export const isOpera = platform.name === 'Opera';
export const isSafari = platform.name === 'Safari';

export const Browser = {
  name: platform.name,
  version: platform.version,
  description: platform.description,
};

export default platform.name;
