"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
/**
 * The middleware class to validate the body
 *
 * @remarks
 * Contains the verifyBodyFieldsErrors function
 */
class BodyValidationMiddleware {
    /**
     * Checks for validation errors in the body fields
     *
     * @param req - express request
     * @param res - express response
     * @param next - express next function
     *
     * @returns Next() on success, Response with status 400 on error
     */
    verifyBodyFieldsErrors(req, res, next) {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).send({ errors: errors.array() });
        }
        return next();
    }
}
exports.default = new BodyValidationMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS52YWxpZGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZXdhcmUvYm9keS52YWxpZGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EseURBQXFEO0FBRXJEOzs7OztHQUtHO0FBQ0gsTUFBTSx3QkFBd0I7SUFDNUI7Ozs7Ozs7O09BUUc7SUFDSCxzQkFBc0IsQ0FDcEIsR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEI7UUFFMUIsTUFBTSxNQUFNLEdBQUcsSUFBQSxvQ0FBZ0IsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3JCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztTQUN6RDtRQUNELE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztDQUNGO0FBRUQsa0JBQWUsSUFBSSx3QkFBd0IsRUFBRSxDQUFDIn0=