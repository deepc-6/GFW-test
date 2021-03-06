"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const debug_1 = __importDefault(require("debug"));
/** Logger to debug */
const log = (0, debug_1.default)('app:mongoose-service');
/**
 * The MongooseService class
 *
 * @remarks
 * Contains the getMongoose and connectWithRetry functions
 */
class MongooseService {
    /**
     * The constructor for the MongooseService class
     */
    constructor() {
        this.count = 0;
        this.mongooseOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        };
        /**
         * Connects to MongoDB and retries the connection if it fails
         */
        this.connectWithRetry = () => {
            log('Attempting MongoDB connection (will retry if needed)');
            mongoose_1.default
                .connect('mongodb://localhost:27017/api-db', this.mongooseOptions)
                .then(() => {
                log('MongoDB is connected');
            })
                .catch((err) => {
                const retrySeconds = 5;
                log(`MongoDB connection unsuccessful (will retry #${++this
                    .count} after ${retrySeconds} seconds):`, err);
                setTimeout(this.connectWithRetry, retrySeconds * 1000);
            });
        };
        this.connectWithRetry();
    }
    /**
     * Gets the mongoose instance
     *
     * @returns mongoose instance
     */
    getMongoose() {
        return mongoose_1.default;
    }
}
exports.default = new MongooseService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvbW9uZ29vc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3REFBZ0M7QUFDaEMsa0RBQTBCO0FBRTFCLHNCQUFzQjtBQUN0QixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUUzRDs7Ozs7R0FLRztBQUNILE1BQU0sZUFBZTtJQVNuQjs7T0FFRztJQUNIO1FBWFEsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUVWLG9CQUFlLEdBQUc7WUFDeEIsZUFBZSxFQUFFLElBQUk7WUFDckIsa0JBQWtCLEVBQUUsSUFBSTtZQUN4Qix3QkFBd0IsRUFBRSxJQUFJO1NBQy9CLENBQUM7UUFrQkY7O1dBRUc7UUFDSCxxQkFBZ0IsR0FBRyxHQUFHLEVBQUU7WUFDdEIsR0FBRyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7WUFDNUQsa0JBQVE7aUJBQ0wsT0FBTyxDQUFDLGtDQUFrQyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUM7aUJBQ2pFLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ1QsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNiLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBQztnQkFDdkIsR0FBRyxDQUNELGdEQUFnRCxFQUFFLElBQUk7cUJBQ25ELEtBQUssVUFBVSxZQUFZLFlBQVksRUFDMUMsR0FBRyxDQUNKLENBQUM7Z0JBQ0YsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDekQsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUM7UUEvQkEsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxXQUFXO1FBQ1QsT0FBTyxrQkFBUSxDQUFDO0lBQ2xCLENBQUM7Q0FzQkY7QUFFRCxrQkFBZSxJQUFJLGVBQWUsRUFBRSxDQUFDIn0=