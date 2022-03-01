"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_validator_1 = require("express-validator");
const common_routes_config_1 = require("../common/common.routes.config");
const auth_controller_1 = __importDefault(require("./controllers/auth.controller"));
const auth_middleware_1 = __importDefault(require("./middleware/auth.middleware"));
const jwt_middleware_1 = __importDefault(require("./middleware/jwt.middleware"));
const body_validation_middleware_1 = __importDefault(require("../common/middleware/body.validation.middleware"));
const users_controller_1 = __importDefault(require("../users/controllers/users.controller"));
/**
 * The AuthRoutes class that extends the abstract class CommonRoutesConfig
 *
 * @remarks
 * Contains the configureRoutes function to configure the routes for /login and /me
 */
class AuthRoutes extends common_routes_config_1.CommonRoutesConfig {
    /**
     * The constructor for the AuthRoutes class
     *
     * @param app - application
     */
    constructor(app) {
        super(app, 'AuthRoutes');
    }
    /**
     * The configureRoutes function
     *
     * @remarks
     * Contains the routes for /login and /me
     */
    configureRoutes() {
        /**
         * The /login post method
         *
         * @remarks
         * Calls the verifyBodyFieldsErrors, verifyUserPassword and createJWT functions
         *
         * @param url - url field
         * @param body - express validated body field
         */
        this.app.post(`/login`, [
            (0, express_validator_1.body)('username').not().isEmpty(),
            (0, express_validator_1.body)('password')
                .isLength({ min: 6 })
                .withMessage('Must include password (6+ characters)'),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            auth_middleware_1.default.verifyUserPassword,
            auth_controller_1.default.createJWT,
        ]);
        /**
         * The /me post method
         *
         * @remarks
         * Calls the validJWTNeeded, checkUser and getUsername functions
         *
         * @param url - url field
         * @param body - express validated body field
         */
        this.app.post(`/me`, [
            jwt_middleware_1.default.validJWTNeeded,
            auth_middleware_1.default.checkUser,
            users_controller_1.default.getUsername,
        ]);
        return this.app;
    }
}
exports.AuthRoutes = AuthRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2F1dGgvYXV0aC5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHlEQUF5QztBQUV6Qyx5RUFBb0U7QUFDcEUsb0ZBQTJEO0FBQzNELG1GQUEwRDtBQUMxRCxpRkFBd0Q7QUFDeEQsaUhBQXVGO0FBQ3ZGLDZGQUFvRTtBQUVwRTs7Ozs7R0FLRztBQUNILE1BQWEsVUFBVyxTQUFRLHlDQUFrQjtJQUNoRDs7OztPQUlHO0lBQ0gsWUFBWSxHQUF3QjtRQUNsQyxLQUFLLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGVBQWU7UUFDYjs7Ozs7Ozs7V0FRRztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN0QixJQUFBLHdCQUFJLEVBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQ2hDLElBQUEsd0JBQUksRUFBQyxVQUFVLENBQUM7aUJBQ2IsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNwQixXQUFXLENBQUMsdUNBQXVDLENBQUM7WUFDdkQsb0NBQXdCLENBQUMsc0JBQXNCO1lBQy9DLHlCQUFjLENBQUMsa0JBQWtCO1lBQ2pDLHlCQUFjLENBQUMsU0FBUztTQUN6QixDQUFDLENBQUM7UUFFSDs7Ozs7Ozs7V0FRRztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNuQix3QkFBYSxDQUFDLGNBQWM7WUFDNUIseUJBQWMsQ0FBQyxTQUFTO1lBQ3hCLDBCQUFlLENBQUMsV0FBVztTQUM1QixDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBckRELGdDQXFEQyJ9