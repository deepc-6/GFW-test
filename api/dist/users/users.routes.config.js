"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const express_validator_1 = require("express-validator");
const users_controller_1 = __importDefault(require("./controllers/users.controller"));
const users_middleware_1 = __importDefault(require("./middleware/users.middleware"));
const common_routes_config_1 = require("../common/common.routes.config");
const body_validation_middleware_1 = __importDefault(require("../common/middleware/body.validation.middleware"));
/**
 * The UsersRoutes class that extends the abstract class CommonRoutesConfig
 *
 * @remarks
 * Contains the configureRoutes function to configure the route for /
 */
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    /**
     * The constructor for the UsersRoutes class
     *
     * @param app - application
     */
    constructor(app) {
        super(app, 'UsersRoutes');
    }
    /**
     * The configureRoutes function
     *
     * @remarks
     * Contains the route for /
     */
    configureRoutes() {
        /**
         * The get and post methods for the url /
         *
         * @remarks
         * Calls the verifyBodyFieldsErrors, validateSameUsernameDoesntExist and createUser functions
         */
        this.app
            .route(`/`)
            .get(users_controller_1.default.listUsers)
            .post((0, express_validator_1.body)('username').not().isEmpty(), (0, express_validator_1.body)('password')
            .isLength({ min: 6 })
            .withMessage('Must include password (6+ characters)'), body_validation_middleware_1.default.verifyBodyFieldsErrors, users_middleware_1.default.validateSameUsernameDoesntExist, users_controller_1.default.createUser);
        return this.app;
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2Vycy91c2Vycy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHlEQUF5QztBQUV6QyxzRkFBNkQ7QUFDN0QscUZBQTREO0FBQzVELHlFQUFvRTtBQUNwRSxpSEFBdUY7QUFFdkY7Ozs7O0dBS0c7QUFDSCxNQUFhLFdBQVksU0FBUSx5Q0FBa0I7SUFDakQ7Ozs7T0FJRztJQUNILFlBQVksR0FBd0I7UUFDbEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxlQUFlO1FBQ2I7Ozs7O1dBS0c7UUFDSCxJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDVixHQUFHLENBQUMsMEJBQWUsQ0FBQyxTQUFTLENBQUM7YUFDOUIsSUFBSSxDQUNILElBQUEsd0JBQUksRUFBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFDaEMsSUFBQSx3QkFBSSxFQUFDLFVBQVUsQ0FBQzthQUNiLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNwQixXQUFXLENBQUMsdUNBQXVDLENBQUMsRUFDdkQsb0NBQXdCLENBQUMsc0JBQXNCLEVBQy9DLDBCQUFlLENBQUMsK0JBQStCLEVBQy9DLDBCQUFlLENBQUMsVUFBVSxDQUMzQixDQUFDO1FBRUosT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQXRDRCxrQ0FzQ0MifQ==