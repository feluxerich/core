import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    title: { type: String, unique: false, required: true },
    alias: { type: String, unique: true, required: true },
    todoEntries: { type: Array, unique: false, required: true },
  },
  { _id: false, versionKey: false, autoIndex: false, id: false, collection: 'todo' },
);

export default mongoose.models.todoSchema || mongoose.model('todoSchema', todoSchema);
