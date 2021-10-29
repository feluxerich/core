import mongoose from 'mongoose';

export const connectToDatabase = async () => {
  if (!process.env.MONGODB_URL) {
    return;
  }

  await mongoose.connect(process.env.MONGODB_URL, {
    dbName: 'core',
    autoIndex: true,
  });

  if (mongoose.connection) {
    return mongoose.connection;
  }
};
