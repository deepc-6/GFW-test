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
const users_1 = __importDefault(require("../services/users"));
/**
 * The user middleware class
 *
 * @remarks
 * Contains the validateSameUsernameDoesntExist async function
 */
class UserMiddleware {
    /**
     * Verifies if user already exists in DB
     *
     * @param req - express request
     * @param res - express response
     * @param next - express next function
     *
     * @returns Next() if user does not exist, Response with status 409 if user exists
     */
    validateSameUsernameDoesntExist(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield users_1.default.getUserByUsernameWithPassword(req.body.username);
            if (user) {
                res.status(409).send({ error: `Username already exists` });
            }
            else {
                next();
            }
        });
    }
}
exports.default = new UserMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWlkZGxld2FyZS91c2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVBLDhEQUE0QztBQUU1Qzs7Ozs7R0FLRztBQUNILE1BQU0sY0FBYztJQUNsQjs7Ozs7Ozs7T0FRRztJQUNHLCtCQUErQixDQUNuQyxHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFMUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxlQUFXLENBQUMsNkJBQTZCLENBQzFELEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUNsQixDQUFDO1lBQ0YsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUseUJBQXlCLEVBQUUsQ0FBQyxDQUFDO2FBQzVEO2lCQUFNO2dCQUNMLElBQUksRUFBRSxDQUFDO2FBQ1I7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUksY0FBYyxFQUFFLENBQUMifQ==