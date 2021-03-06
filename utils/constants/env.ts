export const isDevelopment = process.env.NODE_ENV === 'development';
export const isProduction = process.env.NODE_ENV === 'production';
export const isTesting = process.env.NODE_ENV === 'test';
export const isServer = typeof window === 'undefined';

export default process.env.NODE_ENV;
