"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const express_validator_1 = require("express-validator");
const users_controller_1 = __importDefault(require("./controllers/users.controller"));
const users_middleware_1 = __importDefault(require("./middleware/users.middleware"));
const jwt_middleware_1 = __importDefault(require("../auth/middleware/jwt.middleware"));
const common_routes_config_1 = require("../common/common.routes.config");
const body_validation_middleware_1 = __importDefault(require("../common/middleware/body.validation.middleware"));
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoutes');
    }
    configureRoutes() {
        this.app
            .route(`/`)
            .get(jwt_middleware_1.default.validJWTNeeded, users_controller_1.default.listUsers)
            .post((0, express_validator_1.body)('username').not().isEmpty(), (0, express_validator_1.body)('password')
            .isLength({ min: 6 })
            .withMessage('Must include password (6+ characters)'), body_validation_middleware_1.default.verifyBodyFieldsErrors, users_middleware_1.default.validateSameUsernameDoesntExist, users_controller_1.default.createUser);
        // this.app.param(`userId`, UsersMiddleware.extractUserId);
        // this.app
        //   .route(`/users/:userId`)
        //   .all(
        //     UsersMiddleware.validateUserExists,
        //     jwtMiddleware.validJWTNeeded
        //   )
        //   .get(UsersController.getUserById);
        return this.app;
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2Vycy91c2Vycy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHlEQUF5QztBQUN6QyxzRkFBNkQ7QUFDN0QscUZBQTREO0FBQzVELHVGQUE4RDtBQUM5RCx5RUFBb0U7QUFDcEUsaUhBQXVGO0FBRXZGLE1BQWEsV0FBWSxTQUFRLHlDQUFrQjtJQUNqRCxZQUFZLEdBQXdCO1FBQ2xDLEtBQUssQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDVixHQUFHLENBQ0Ysd0JBQWEsQ0FBQyxjQUFjLEVBQzVCLDBCQUFlLENBQUMsU0FBUyxDQUMxQjthQUNBLElBQUksQ0FDSCxJQUFBLHdCQUFJLEVBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQ2hDLElBQUEsd0JBQUksRUFBQyxVQUFVLENBQUM7YUFDYixRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDcEIsV0FBVyxDQUFDLHVDQUF1QyxDQUFDLEVBQ3ZELG9DQUF3QixDQUFDLHNCQUFzQixFQUMvQywwQkFBZSxDQUFDLCtCQUErQixFQUMvQywwQkFBZSxDQUFDLFVBQVUsQ0FDM0IsQ0FBQztRQUVKLDJEQUEyRDtRQUUzRCxXQUFXO1FBQ1gsNkJBQTZCO1FBQzdCLFVBQVU7UUFDViwwQ0FBMEM7UUFDMUMsbUNBQW1DO1FBQ25DLE1BQU07UUFDTix1Q0FBdUM7UUFFdkMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQWxDRCxrQ0FrQ0MifQ==