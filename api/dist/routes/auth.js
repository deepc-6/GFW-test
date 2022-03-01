"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_validator_1 = require("express-validator");
const common_1 = require("./common");
const auth_1 = __importDefault(require("../controllers/auth"));
const users_1 = __importDefault(require("../controllers/users"));
const auth_2 = __importDefault(require("../middleware/auth"));
const jwt_1 = __importDefault(require("../middleware/jwt"));
const body_validation_1 = __importDefault(require("../middleware/body.validation"));
/**
 * The AuthRoutes class that extends the abstract class CommonRoutesConfig
 *
 * @remarks
 * Contains the configureRoutes function to configure the routes for /login and /me
 */
class AuthRoutes extends common_1.CommonRoutesConfig {
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
            body_validation_1.default.verifyBodyFieldsErrors,
            auth_2.default.verifyUserPassword,
            auth_1.default.createJWT,
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
            jwt_1.default.validJWTNeeded,
            auth_2.default.checkUser,
            users_1.default.getUsername,
        ]);
        return this.app;
    }
}
exports.AuthRoutes = AuthRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvYXV0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSx5REFBeUM7QUFFekMscUNBQThDO0FBQzlDLCtEQUFpRDtBQUNqRCxpRUFBa0Q7QUFDbEQsOERBQWdEO0FBQ2hELDREQUE4QztBQUM5QyxvRkFBcUU7QUFFckU7Ozs7O0dBS0c7QUFDSCxNQUFhLFVBQVcsU0FBUSwyQkFBa0I7SUFDaEQ7Ozs7T0FJRztJQUNILFlBQVksR0FBd0I7UUFDbEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxlQUFlO1FBQ2I7Ozs7Ozs7O1dBUUc7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDdEIsSUFBQSx3QkFBSSxFQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUNoQyxJQUFBLHdCQUFJLEVBQUMsVUFBVSxDQUFDO2lCQUNiLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDcEIsV0FBVyxDQUFDLHVDQUF1QyxDQUFDO1lBQ3ZELHlCQUF3QixDQUFDLHNCQUFzQjtZQUMvQyxjQUFjLENBQUMsa0JBQWtCO1lBQ2pDLGNBQWMsQ0FBQyxTQUFTO1NBQ3pCLENBQUMsQ0FBQztRQUVIOzs7Ozs7OztXQVFHO1FBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ25CLGFBQWEsQ0FBQyxjQUFjO1lBQzVCLGNBQWMsQ0FBQyxTQUFTO1lBQ3hCLGVBQWMsQ0FBQyxXQUFXO1NBQzNCLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUFyREQsZ0NBcURDIn0=