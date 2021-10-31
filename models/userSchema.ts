import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({ any: Schema.Types.Mixed }, { strict: false, collection: 'user' });

export default mongoose?.models?.user || mongoose.model('user', userSchema);
