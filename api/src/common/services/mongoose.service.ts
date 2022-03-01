import mongoose from 'mongoose';
import debug from 'debug';

/** Logger to debug */
const log: debug.IDebugger = debug('app:mongoose-service');

/**
 * The MongooseService class
 *
 * @remarks
 * Contains the getMongoose and connectWithRetry functions
 */
class MongooseService {
  private count = 0;

  private mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  };

  /**
   * The constructor for the MongooseService class
   */
  constructor() {
    this.connectWithRetry();
  }

  /**
   * Gets the mongoose instance
   *
   * @returns mongoose instance
   */
  getMongoose() {
    return mongoose;
  }

  /**
   * Connects to MongoDB and retries the connection if it fails
   */
  connectWithRetry = () => {
    log('Attempting MongoDB connection (will retry if needed)');
    mongoose
      .connect('mongodb://localhost:27017/api-db', this.mongooseOptions)
      .then(() => {
        log('MongoDB is connected');
      })
      .catch((err) => {
        const retrySeconds = 5;
        log(
          `MongoDB connection unsuccessful (will retry #${++this
            .count} after ${retrySeconds} seconds):`,
          err
        );
        setTimeout(this.connectWithRetry, retrySeconds * 1000);
      });
  };
}

export default new MongooseService();
