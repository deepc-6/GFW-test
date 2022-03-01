"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shortid_1 = __importDefault(require("shortid"));
const mongoose_1 = __importDefault(require("../services/mongoose"));
/**
 * The UsersDao class
 *
 * @remarks
 * Contains the user schema and the addUser, getUserByUsernameWithPassword,
 * getUserById and getUsers async functions
 */
class UsersDao {
    constructor() {
        /** The array of users */
        this.users = [];
        /** Get schema from mongoose */
        this.Schema = mongoose_1.default.getMongoose().Schema;
        /** Define user schema */
        this.userSchema = new this.Schema({
            _id: String,
            username: String,
            password: { type: String, select: false },
        }, { id: false });
        /** Define User */
        this.User = mongoose_1.default.getMongoose().model('Users', this.userSchema);
    }
    /**
     * Saves a user to MongoDB and returns the id
     *
     * @param user - user based on user dto
     *
     * @returns userId
     */
    addUser(userFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = shortid_1.default.generate();
            const user = new this.User(Object.assign({ id: userId }, userFields));
            yield user.save();
            return userId;
        });
    }
    /**
     * Finds a user by username
     *
     * @param username - username
     *
     * @returns user
     */
    getUserByUsernameWithPassword(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.User.findOne({ username })
                .select('_id username +password')
                .exec();
            return user;
        });
    }
    /**
     * Finds a user by id
     *
     * @param userId - userId
     *
     * @returns user
     */
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.User.findOne({ _id: userId }).findOne({ _id: userId }).exec();
        });
    }
    /**
     * Finds all users
     *
     * @param limit - limit
     * @param page - page
     *
     * @returns users
     */
    getUsers(limit = 25, page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.User.find()
                .limit(limit)
                .skip(limit * page)
                .exec();
        });
    }
}
exports.default = new UsersDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGFvL3VzZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQThCO0FBRzlCLG9FQUFtRDtBQUVuRDs7Ozs7O0dBTUc7QUFDSCxNQUFNLFFBQVE7SUFBZDtRQUNFLHlCQUF5QjtRQUN6QixVQUFLLEdBQW1CLEVBQUUsQ0FBQztRQUUzQiwrQkFBK0I7UUFDL0IsV0FBTSxHQUFHLGtCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBRTlDLHlCQUF5QjtRQUN6QixlQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUMxQjtZQUNFLEdBQUcsRUFBRSxNQUFNO1lBQ1gsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1NBQzFDLEVBQ0QsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQ2QsQ0FBQztRQUVGLGtCQUFrQjtRQUNsQixTQUFJLEdBQUcsa0JBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQTBEdkUsQ0FBQztJQXhEQzs7Ozs7O09BTUc7SUFDRyxPQUFPLENBQUMsVUFBbUI7O1lBQy9CLE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxpQkFDeEIsRUFBRSxFQUFFLE1BQU0sSUFDUCxVQUFVLEVBQ2IsQ0FBQztZQUNILE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2xCLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7S0FBQTtJQUVEOzs7Ozs7T0FNRztJQUNHLDZCQUE2QixDQUFDLFFBQWdCOztZQUNsRCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUM7aUJBQy9DLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztpQkFDaEMsSUFBSSxFQUFFLENBQUM7WUFDVixPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7S0FBQTtJQUVEOzs7Ozs7T0FNRztJQUNHLFdBQVcsQ0FBQyxNQUFjOztZQUM5QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUUsQ0FBQztLQUFBO0lBRUQ7Ozs7Ozs7T0FPRztJQUNHLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxFQUFFLElBQUksR0FBRyxDQUFDOztZQUNqQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2lCQUNwQixLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2lCQUNsQixJQUFJLEVBQUUsQ0FBQztRQUNaLENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSxRQUFRLEVBQUUsQ0FBQyJ9