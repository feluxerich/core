import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const projectSchema = new Schema({ any: Schema.Types.Mixed }, { strict: false, collection: 'project' });

export default mongoose?.models?.project || mongoose.model('project', projectSchema);
