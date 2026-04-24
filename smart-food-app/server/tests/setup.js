const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

exports.connectDB = async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
};

exports.disconnectDB = async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
};

exports.clearDB = async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
};
