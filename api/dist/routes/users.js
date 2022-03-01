"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_validator_1 = require("express-validator");
const common_1 = require("./common");
const users_1 = __importDefault(require("../controllers/users"));
const users_2 = __importDefault(require("../middleware/users"));
const body_validation_1 = __importDefault(require("../middleware/body.validation"));
/**
 * The UserRoutes class that extends the abstract class CommonRoutesConfig
 *
 * @remarks
 * Contains the configureRoutes function to configure the route for /
 */
class UserRoutes extends common_1.CommonRoutesConfig {
    /**
     * The constructor for the UserRoutes class
     *
     * @param app - application
     */
    constructor(app) {
        super(app, 'UserRoutes');
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
            .get(users_1.default.listUsers)
            .post((0, express_validator_1.body)('username').not().isEmpty(), (0, express_validator_1.body)('password')
            .isLength({ min: 6 })
            .withMessage('Must include password (6+ characters)'), body_validation_1.default.verifyBodyFieldsErrors, users_2.default.validateSameUsernameDoesntExist, users_1.default.createUser);
        return this.app;
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL3VzZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHlEQUF5QztBQUV6QyxxQ0FBOEM7QUFDOUMsaUVBQWtEO0FBQ2xELGdFQUFpRDtBQUNqRCxvRkFBcUU7QUFFckU7Ozs7O0dBS0c7QUFDSCxNQUFhLFVBQVcsU0FBUSwyQkFBa0I7SUFDaEQ7Ozs7T0FJRztJQUNILFlBQVksR0FBd0I7UUFDbEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxlQUFlO1FBQ2I7Ozs7O1dBS0c7UUFDSCxJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDVixHQUFHLENBQUMsZUFBYyxDQUFDLFNBQVMsQ0FBQzthQUM3QixJQUFJLENBQ0gsSUFBQSx3QkFBSSxFQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUNoQyxJQUFBLHdCQUFJLEVBQUMsVUFBVSxDQUFDO2FBQ2IsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ3BCLFdBQVcsQ0FBQyx1Q0FBdUMsQ0FBQyxFQUN2RCx5QkFBd0IsQ0FBQyxzQkFBc0IsRUFDL0MsZUFBYyxDQUFDLCtCQUErQixFQUM5QyxlQUFjLENBQUMsVUFBVSxDQUMxQixDQUFDO1FBRUosT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQXRDRCxnQ0FzQ0MifQ==