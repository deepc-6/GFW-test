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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_1 = __importDefault(require("crypto"));
const dotenv_1 = __importDefault(require("dotenv"));
/** Load config from .env file */
const dotenvResult = dotenv_1.default.config();
/** Handle config errors */
if (dotenvResult.error) {
    throw dotenvResult.error;
}
/** Get JWT secret from .env file */
const jwtSecret = process.env.JWT_SECRET;
/** Set token expiration timer */
const tokenExpirationInSeconds = 36000;
/**
 * The auth controller class
 *
 * @remarks
 * Contains the createJWT function
 */
class AuthController {
    /**
     * Creates a jwt token and returns an accessToken and a refreshToken
     *
     * @param req - express request
     * @param res - express response
     *
     * @returns Response with status and data on success
     */
    createJWT(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const refreshId = req.body.userId + jwtSecret;
                const salt = crypto_1.default.createSecretKey(crypto_1.default.randomBytes(16));
                const hash = crypto_1.default
                    .createHmac('sha512', salt)
                    .update(refreshId)
                    .digest('base64');
                req.body.refreshKey = salt.export();
                const token = jsonwebtoken_1.default.sign(req.body, jwtSecret, {
                    expiresIn: tokenExpirationInSeconds,
                });
                return res.status(200).send({ accessToken: token, refreshToken: hash });
            }
            catch (err) {
                return res.status(500).send();
            }
        });
    }
}
exports.default = new AuthController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9hdXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsZ0VBQStCO0FBQy9CLG9EQUE0QjtBQUM1QixvREFBNEI7QUFFNUIsaUNBQWlDO0FBQ2pDLE1BQU0sWUFBWSxHQUFHLGdCQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFckMsMkJBQTJCO0FBQzNCLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRTtJQUN0QixNQUFNLFlBQVksQ0FBQyxLQUFLLENBQUM7Q0FDMUI7QUFFRCxvQ0FBb0M7QUFDcEMsTUFBTSxTQUFTLEdBQXVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO0FBRTdELGlDQUFpQztBQUNqQyxNQUFNLHdCQUF3QixHQUFHLEtBQUssQ0FBQztBQUV2Qzs7Ozs7R0FLRztBQUNILE1BQU0sY0FBYztJQUNsQjs7Ozs7OztPQU9HO0lBQ0csU0FBUyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3pELElBQUk7Z0JBQ0YsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO2dCQUM5QyxNQUFNLElBQUksR0FBRyxnQkFBTSxDQUFDLGVBQWUsQ0FBQyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1RCxNQUFNLElBQUksR0FBRyxnQkFBTTtxQkFDaEIsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7cUJBQzFCLE1BQU0sQ0FBQyxTQUFTLENBQUM7cUJBQ2pCLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDcEIsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNwQyxNQUFNLEtBQUssR0FBRyxzQkFBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFNBQW1CLEVBQUU7b0JBQ3BELFNBQVMsRUFBRSx3QkFBd0I7aUJBQ3BDLENBQUMsQ0FBQztnQkFDSCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUN6RTtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNaLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMvQjtRQUNILENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSxjQUFjLEVBQUUsQ0FBQyJ9