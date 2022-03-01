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
const users_service_1 = __importDefault(require("../../users/services/users.service"));
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
            const user = yield users_service_1.default.getUserByUsernameWithPassword(req.body.username);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2F1dGgvbWlkZGxld2FyZS9hdXRoLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0NBQWlDO0FBRWpDLHVGQUE4RDtBQUU5RDs7Ozs7R0FLRztBQUNILE1BQU0sY0FBYztJQUNsQjs7Ozs7Ozs7T0FRRztJQUNHLGtCQUFrQixDQUN0QixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFMUIsTUFBTSxJQUFJLEdBQVEsTUFBTSx1QkFBWSxDQUFDLDZCQUE2QixDQUNoRSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FDbEIsQ0FBQztZQUNGLElBQUksSUFBSSxFQUFFO2dCQUNSLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ25DLElBQUksTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUN4RCxHQUFHLENBQUMsSUFBSSxHQUFHO3dCQUNULE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRzt3QkFDaEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO3FCQUN4QixDQUFDO29CQUNGLE9BQU8sSUFBSSxFQUFFLENBQUM7aUJBQ2Y7YUFDRjtZQUNELE9BQU8sR0FBRztpQkFDUCxNQUFNLENBQUMsR0FBRyxDQUFDO2lCQUNYLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLGtDQUFrQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVELENBQUM7S0FBQTtJQUVEOzs7Ozs7OztPQVFHO0lBQ0csU0FBUyxDQUNiLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztZQUUxQixNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFFcEMsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO2dCQUMzQixJQUFJLEVBQUUsQ0FBQzthQUNSO2lCQUFNO2dCQUNMLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxFQUFFLENBQUM7YUFDUjtRQUNILENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSxjQUFjLEVBQUUsQ0FBQyJ9