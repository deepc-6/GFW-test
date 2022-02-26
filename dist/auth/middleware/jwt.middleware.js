"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// import usersService from '../../users/services/users.service';
// @ts-expect-error
const jwtSecret = process.env.JWT_SECRET;
class JwtMiddleware {
    // verifyRefreshBodyField(
    //   req: express.Request,
    //   res: express.Response,
    //   next: express.NextFunction
    // ) {
    //   if (req.body && req.body.refreshToken) {
    //     return next();
    //   } else {
    //     return res
    //       .status(400)
    //       .send({ errors: ['Missing required field: refreshToken'] });
    //   }
    // }
    // async validRefreshNeeded(
    //   req: express.Request,
    //   res: express.Response,
    //   next: express.NextFunction
    // ) {
    //   const user: any = await usersService.getUserByUsernameWithPassword(
    //     res.locals.jwt.username
    //   );
    //   const salt = crypto.createSecretKey(
    //     Buffer.from(res.locals.jwt.refreshKey.data)
    //   );
    //   const hash = crypto
    //     .createHmac('sha512', salt)
    //     .update(res.locals.jwt.userId + jwtSecret)
    //     .digest('base64');
    //   if (hash === req.body.refreshToken) {
    //     req.body = {
    //       userId: user._id,
    //       username: user.username,
    //     };
    //     return next();
    //   } else {
    //     return res.status(400).send({ errors: ['Invalid refresh token'] });
    //   }
    // }
    validJWTNeeded(req, res, next) {
        if (req.headers['authorization']) {
            try {
                const authorization = req.headers['authorization'].split(' ');
                if (authorization[0] !== 'Bearer') {
                    return res.status(401).send();
                }
                else {
                    res.locals.jwt = jsonwebtoken_1.default.verify(authorization[1], jwtSecret);
                    next();
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0Lm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXV0aC9taWRkbGV3YXJlL2p3dC5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0VBQStCO0FBRy9CLGlFQUFpRTtBQUVqRSxtQkFBbUI7QUFDbkIsTUFBTSxTQUFTLEdBQVcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7QUFFakQsTUFBTSxhQUFhO0lBQ2pCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQixNQUFNO0lBQ04sNkNBQTZDO0lBQzdDLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixxRUFBcUU7SUFDckUsTUFBTTtJQUNOLElBQUk7SUFFSiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQiwrQkFBK0I7SUFDL0IsTUFBTTtJQUNOLHdFQUF3RTtJQUN4RSw4QkFBOEI7SUFDOUIsT0FBTztJQUNQLHlDQUF5QztJQUN6QyxrREFBa0Q7SUFDbEQsT0FBTztJQUNQLHdCQUF3QjtJQUN4QixrQ0FBa0M7SUFDbEMsaURBQWlEO0lBQ2pELHlCQUF5QjtJQUN6QiwwQ0FBMEM7SUFDMUMsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixpQ0FBaUM7SUFDakMsU0FBUztJQUNULHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsMEVBQTBFO0lBQzFFLE1BQU07SUFDTixJQUFJO0lBRUosY0FBYyxDQUNaLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCO1FBRTFCLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUNoQyxJQUFJO2dCQUNGLE1BQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM5RCxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7b0JBQ2pDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDL0I7cUJBQU07b0JBQ0wsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsc0JBQUcsQ0FBQyxNQUFNLENBQ3pCLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFDaEIsU0FBUyxDQUNILENBQUM7b0JBQ1QsSUFBSSxFQUFFLENBQUM7aUJBQ1I7YUFDRjtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNaLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMvQjtTQUNGO2FBQU07WUFDTCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDL0I7SUFDSCxDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLGFBQWEsRUFBRSxDQUFDIn0=