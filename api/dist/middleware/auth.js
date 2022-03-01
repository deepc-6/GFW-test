"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const argon2 = __importStar(require("argon2"));
const users_1 = __importDefault(require("../services/users"));
/**
 * The auth middleware class
 *
 * @remarks
 * Contains the verifyUserPassword and checkUser functions
 */
class AuthMiddleware {
    /**
     * Finds a user and verifies the password with argon2
     *
     * @param req - express request
     * @param res - express response
     * @param next - express next function
     *
     * @returns Next() on success, Response with status 400 on error
     */
    verifyUserPassword(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield users_1.default.getUserByUsernameWithPassword(req.body.username);
            if (user) {
                const passwordHash = user.password;
                if (yield argon2.verify(passwordHash, req.body.password)) {
                    req.body = {
                        userId: user._id,
                        username: user.username,
                    };
                    return next();
                }
            }
            return res
                .status(400)
                .send({ errors: ['Invalid username and/or password'] });
        });
    }
    /**
     * Checks if user exists in response local variable
     *
     * @param req - express request
     * @param res - express response
     * @param next - express next function
     *
     * @returns Next()
     */
    checkUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username } = res.locals.jwt;
            if (username) {
                res.locals.user = username;
                next();
            }
            else {
                res.locals.user = null;
                next();
            }
        });
    }
}
exports.default = new AuthMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlL2F1dGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0NBQWlDO0FBRWpDLDhEQUE0QztBQUU1Qzs7Ozs7R0FLRztBQUNILE1BQU0sY0FBYztJQUNsQjs7Ozs7Ozs7T0FRRztJQUNHLGtCQUFrQixDQUN0QixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFMUIsTUFBTSxJQUFJLEdBQVEsTUFBTSxlQUFXLENBQUMsNkJBQTZCLENBQy9ELEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUNsQixDQUFDO1lBQ0YsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDbkMsSUFBSSxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ3hELEdBQUcsQ0FBQyxJQUFJLEdBQUc7d0JBQ1QsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHO3dCQUNoQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7cUJBQ3hCLENBQUM7b0JBQ0YsT0FBTyxJQUFJLEVBQUUsQ0FBQztpQkFDZjthQUNGO1lBQ0QsT0FBTyxHQUFHO2lCQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUM7aUJBQ1gsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsa0NBQWtDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUQsQ0FBQztLQUFBO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDRyxTQUFTLENBQ2IsR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEI7O1lBRTFCLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUVwQyxJQUFJLFFBQVEsRUFBRTtnQkFDWixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7Z0JBQzNCLElBQUksRUFBRSxDQUFDO2FBQ1I7aUJBQU07Z0JBQ0wsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixJQUFJLEVBQUUsQ0FBQzthQUNSO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLGNBQWMsRUFBRSxDQUFDIn0=