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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS52YWxpZGF0aW9uLm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL21pZGRsZXdhcmUvYm9keS52YWxpZGF0aW9uLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx5REFBcUQ7QUFFckQ7Ozs7O0dBS0c7QUFDSCxNQUFNLHdCQUF3QjtJQUM1Qjs7Ozs7Ozs7T0FRRztJQUNILHNCQUFzQixDQUNwQixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjtRQUUxQixNQUFNLE1BQU0sR0FBRyxJQUFBLG9DQUFnQixFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDckIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLHdCQUF3QixFQUFFLENBQUMifQ==