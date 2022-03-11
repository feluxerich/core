import crypto from 'crypto';

// 1 - 0 to 255
// 2 - 0 to 65,535
// 3 - 0 to 16,777,215
// 4 - 0 to 4,294,967,295

export class Alias {
  randomBytes(bytes: number) {
    return crypto.randomBytes(bytes).toString('hex');
  }

  createAlias() {
    return this.randomBytes(3);
  }
}

export const alias = new Alias();
export default alias;
