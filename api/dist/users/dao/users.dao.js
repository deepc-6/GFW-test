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
const mongoose_service_1 = __importDefault(require("../../common/services/mongoose.service"));
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
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        /** Define user schema */
        this.userSchema = new this.Schema({
            _id: String,
            username: String,
            password: { type: String, select: false },
        }, { id: false });
        /** Define User */
        this.User = mongoose_service_1.default.getMongoose().model('Users', this.userSchema);
    }
    /**
     * Saves a user to MongoDB and returns the id
     *
     * @param userFields - user fields based on create user dto
     *
     * @returns userId
     */
    addUser(userFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = shortid_1.default.generate();
            const user = new this.User(Object.assign({ _id: userId }, userFields));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3VzZXJzL2Rhby91c2Vycy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBOEI7QUFHOUIsOEZBQXFFO0FBRXJFOzs7Ozs7R0FNRztBQUNILE1BQU0sUUFBUTtJQUFkO1FBQ0UseUJBQXlCO1FBQ3pCLFVBQUssR0FBeUIsRUFBRSxDQUFDO1FBRWpDLCtCQUErQjtRQUMvQixXQUFNLEdBQUcsMEJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFFOUMseUJBQXlCO1FBQ3pCLGVBQVUsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQzFCO1lBQ0UsR0FBRyxFQUFFLE1BQU07WUFDWCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7U0FDMUMsRUFDRCxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FDZCxDQUFDO1FBRUYsa0JBQWtCO1FBQ2xCLFNBQUksR0FBRywwQkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBMER2RSxDQUFDO0lBeERDOzs7Ozs7T0FNRztJQUNHLE9BQU8sQ0FBQyxVQUF5Qjs7WUFDckMsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNsQyxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLGlCQUN4QixHQUFHLEVBQUUsTUFBTSxJQUNSLFVBQVUsRUFDYixDQUFDO1lBQ0gsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEIsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQztLQUFBO0lBRUQ7Ozs7OztPQU1HO0lBQ0csNkJBQTZCLENBQUMsUUFBZ0I7O1lBQ2xELE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQztpQkFDL0MsTUFBTSxDQUFDLHdCQUF3QixDQUFDO2lCQUNoQyxJQUFJLEVBQUUsQ0FBQztZQUNWLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztLQUFBO0lBRUQ7Ozs7OztPQU1HO0lBQ0csV0FBVyxDQUFDLE1BQWM7O1lBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1RSxDQUFDO0tBQUE7SUFFRDs7Ozs7OztPQU9HO0lBQ0csUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsSUFBSSxHQUFHLENBQUM7O1lBQ2pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7aUJBQ3BCLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7aUJBQ2xCLElBQUksRUFBRSxDQUFDO1FBQ1osQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLFFBQVEsRUFBRSxDQUFDIn0=