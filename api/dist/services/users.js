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
const users_1 = __importDefault(require("../dao/users"));
/**
 * The UserService class
 *
 * @remarks
 * Contains the create, list, readById and getUserByUsernameWithPassword async functions
 */
class UserService {
    /**
     * Creates a user
     *
     * @param user - user
     *
     * @returns addUser function from UsersDao
     */
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_1.default.addUser(user);
        });
    }
    /**
     * Gets all users
     *
     * @param limit - limit
     * @param page - page
     *
     * @returns getUsers function from UsersDao
     */
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_1.default.getUsers(limit, page);
        });
    }
    /**
     * Gets a user by id
     *
     * @param id - userId
     *
     * @returns getUserById function from UsersDao
     */
    readById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_1.default.getUserById(id);
        });
    }
    /**
     * Gets a user by username
     *
     * @param username - username
     *
     * @returns getUserByUsernameWithPassword function from UsersDao
     */
    getUserByUsernameWithPassword(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_1.default.getUserByUsernameWithPassword(username);
        });
    }
}
exports.default = new UserService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvdXNlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBbUM7QUFJbkM7Ozs7O0dBS0c7QUFDSCxNQUFNLFdBQVc7SUFDZjs7Ozs7O09BTUc7SUFDRyxNQUFNLENBQUMsSUFBYTs7WUFDeEIsT0FBTyxlQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUM7S0FBQTtJQUVEOzs7Ozs7O09BT0c7SUFDRyxJQUFJLENBQUMsS0FBYSxFQUFFLElBQVk7O1lBQ3BDLE9BQU8sZUFBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQztLQUFBO0lBRUQ7Ozs7OztPQU1HO0lBQ0csUUFBUSxDQUFDLEVBQVU7O1lBQ3ZCLE9BQU8sZUFBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQyxDQUFDO0tBQUE7SUFFRDs7Ozs7O09BTUc7SUFDRyw2QkFBNkIsQ0FBQyxRQUFnQjs7WUFDbEQsT0FBTyxlQUFPLENBQUMsNkJBQTZCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekQsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLFdBQVcsRUFBRSxDQUFDIn0=