import * as bcrypt from 'bcrypt';

export class Password {
  hash(plain: string) {
    // check
    return bcrypt.hashSync(plain, bcrypt.genSaltSync(12));
  }

  compare(plain: string, hash: string) {
    return bcrypt.compareSync(plain, hash);
  }
}

export default new Password();
