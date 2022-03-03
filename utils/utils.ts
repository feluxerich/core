export const aspectRatio = (width: number, height: number) => {
  const r = gcd(width, height);

  return [width / r, height / r];
};

export const gcd = (a: number, b: number): number => {
  return b == 0 ? a : gcd(b, a % b);
};

export const fVoid = () => {};

export const withPrefix = (n: number): string => {
  const isPositive = Math.sign(n) === 1;

  return `${isPositive ? '+' : ''}${n}`;
};
