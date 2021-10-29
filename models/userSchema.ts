import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, unique: true },
    password_hash: String,
  },
  { strict: false, collection: 'user' },
);

export default mongoose?.models?.user || mongoose.model('user', userSchema);
