"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
/** Get JWT secret from .env file */
const jwtSecret = process.env.JWT_SECRET;
/**
 * The jwt middleware class
 *
 * @remarks
 * Contains the validJWTNeeded function
 */
class JwtMiddleware {
    /**
     * Verifies if the jwt token sent by client is valid
     *
     * @param req - express request
     * @param res - express response
     * @param next - express next function
     *
     * @returns Next() on success, Response with status 401 or 403 on error
     */
    validJWTNeeded(req, res, next) {
        if (req.headers.authorization) {
            try {
                const authorization = req.headers.authorization.split(' ');
                if (authorization[0] !== 'Bearer') {
                    return res.status(401).send();
                }
                res.locals.jwt = jsonwebtoken_1.default.verify(authorization[1], jwtSecret);
                return next();
            }
            catch (err) {
                return res.status(403).send();
            }
        }
        else {
            return res.status(401).send();
        }
    }
}
exports.default = new JwtMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0Lm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXV0aC9taWRkbGV3YXJlL2p3dC5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0VBQStCO0FBSS9CLG9DQUFvQztBQUNwQyxNQUFNLFNBQVMsR0FBdUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7QUFFN0Q7Ozs7O0dBS0c7QUFDSCxNQUFNLGFBQWE7SUFDakI7Ozs7Ozs7O09BUUc7SUFDSCxjQUFjLENBQ1osR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEI7UUFFMUIsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRTtZQUM3QixJQUFJO2dCQUNGLE1BQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFO29CQUNqQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQy9CO2dCQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLHNCQUFHLENBQUMsTUFBTSxDQUN6QixhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQ2hCLFNBQW1CLENBQ2IsQ0FBQztnQkFDVCxPQUFPLElBQUksRUFBRSxDQUFDO2FBQ2Y7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDWixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDL0I7U0FDRjthQUFNO1lBQ0wsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztDQUNGO0FBRUQsa0JBQWUsSUFBSSxhQUFhLEVBQUUsQ0FBQyJ9