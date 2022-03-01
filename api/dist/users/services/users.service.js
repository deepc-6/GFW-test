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
const users_dao_1 = __importDefault(require("../dao/users.dao"));
/**
 * The UsersService class
 *
 * @remarks
 * Contains the create, list, readById and getUserByUsernameWithPassword async functions
 */
class UsersService {
    /**
     * Creates a user
     *
     * @param user - user
     *
     * @returns addUser function from UsersDao
     */
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_dao_1.default.addUser(user);
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
            return users_dao_1.default.getUsers(limit, page);
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
            return users_dao_1.default.getUserById(id);
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
            return users_dao_1.default.getUserByUsernameWithPassword(username);
        });
    }
}
exports.default = new UsersService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91c2Vycy9zZXJ2aWNlcy91c2Vycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQXdDO0FBSXhDOzs7OztHQUtHO0FBQ0gsTUFBTSxZQUFZO0lBQ2hCOzs7Ozs7T0FNRztJQUNHLE1BQU0sQ0FBQyxJQUFtQjs7WUFDOUIsT0FBTyxtQkFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDO0tBQUE7SUFFRDs7Ozs7OztPQU9HO0lBQ0csSUFBSSxDQUFDLEtBQWEsRUFBRSxJQUFZOztZQUNwQyxPQUFPLG1CQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQUE7SUFFRDs7Ozs7O09BTUc7SUFDRyxRQUFRLENBQUMsRUFBVTs7WUFDdkIsT0FBTyxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQyxDQUFDO0tBQUE7SUFFRDs7Ozs7O09BTUc7SUFDRyw2QkFBNkIsQ0FBQyxRQUFnQjs7WUFDbEQsT0FBTyxtQkFBUSxDQUFDLDZCQUE2QixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFELENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSxZQUFZLEVBQUUsQ0FBQyJ9