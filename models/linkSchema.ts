import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const linkSchema = new Schema(
  {
    link: { type: String, unique: false, required: true },
    alias: { type: String, unique: true, required: true },
    custom: { type: Boolean, unique: false, required: true },
  },
  { _id: false, versionKey: false, autoIndex: false, id: false, collection: 'shortener' },
);

export default mongoose.models.linkSchema || mongoose.model('linkSchema', linkSchema);
