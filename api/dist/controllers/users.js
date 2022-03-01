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
const argon2_1 = __importDefault(require("argon2"));
const users_1 = __importDefault(require("../services/users"));
/**
 * The UserController class
 *
 * @remarks
 * Contains the listUsers, getUserById, getUsername and createUser async functions
 */
class UserController {
    /**
     * Finds all users and returns them
     *
     * @param req - express request
     * @param res - express response
     *
     * @returns Response with status and list of users
     */
    listUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield users_1.default.list(100, 0);
            res.status(200).send(users);
        });
    }
    /**
     * Finds a user by id and returns it
     *
     * @param req - express request
     * @param res - express response
     *
     * @returns Response with status and user
     */
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield users_1.default.readById(req.body.id);
            res.status(200).send(user);
        });
    }
    /**
     * Gets the username from the response local variable
     *
     * @param req - express request
     * @param res - express response
     *
     * @returns Response with status and username
     */
    getUsername(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const username = res.locals.user;
            res.status(200).send(username);
        });
    }
    /**
     * Creates a user
     *
     * @param req - express request
     * @param res - express response
     *
     * @returns Response with status and _id
     */
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.password = yield argon2_1.default.hash(req.body.password);
            const userId = yield users_1.default.create(req.body);
            res.status(201).send({ _id: userId });
        });
    }
}
exports.default = new UserController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvdXNlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxvREFBNEI7QUFFNUIsOERBQTRDO0FBRTVDOzs7OztHQUtHO0FBQ0gsTUFBTSxjQUFjO0lBQ2xCOzs7Ozs7O09BT0c7SUFDRyxTQUFTLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDekQsTUFBTSxLQUFLLEdBQUcsTUFBTSxlQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixDQUFDO0tBQUE7SUFFRDs7Ozs7OztPQU9HO0lBQ0csV0FBVyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzNELE1BQU0sSUFBSSxHQUFHLE1BQU0sZUFBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3JELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLENBQUM7S0FBQTtJQUVEOzs7Ozs7O09BT0c7SUFDRyxXQUFXLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDM0QsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDakMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakMsQ0FBQztLQUFBO0lBRUQ7Ozs7Ozs7T0FPRztJQUNHLFVBQVUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUMxRCxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLGdCQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekQsTUFBTSxNQUFNLEdBQUcsTUFBTSxlQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSxjQUFjLEVBQUUsQ0FBQyJ9