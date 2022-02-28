"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const auth_header_1 = __importDefault(require("./auth-header"));
const API_URL = 'http://localhost:3000/';
class UserService {
    getAllUsers() {
        return axios_1.default.get(API_URL);
    }
    getUserProfile() {
        return axios_1.default.post(API_URL + 'me', { headers: (0, auth_header_1.default)() });
    }
}
exports.default = new UserService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vdWkvc3JjL3NlcnZpY2VzL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUEwQjtBQUMxQixnRUFBdUM7QUFFdkMsTUFBTSxPQUFPLEdBQUcsd0JBQXdCLENBQUM7QUFFekMsTUFBTSxXQUFXO0lBQ2YsV0FBVztRQUNULE9BQU8sZUFBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsY0FBYztRQUNaLE9BQU8sZUFBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUEscUJBQVUsR0FBRSxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO0NBV0Y7QUFFRCxrQkFBZSxJQUFJLFdBQVcsRUFBRSxDQUFDIn0=