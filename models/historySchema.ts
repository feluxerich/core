import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const historySchema = new Schema({ any: Schema.Types.Mixed }, { strict: false, collection: 'history' });

export default mongoose?.models?.user || mongoose.model('user', historySchema);
