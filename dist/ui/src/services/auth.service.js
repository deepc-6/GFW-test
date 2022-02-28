"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const API_URL = "http://localhost:3000/";
class AuthService {
    login(username, password) {
        return axios_1.default
            .post(API_URL + "login", {
            username,
            password
        })
            .then(response => {
            console.log(response);
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
    }
    logout() {
        localStorage.removeItem("user");
    }
    register(username, password) {
        return axios_1.default.post(API_URL, {
            username,
            password
        });
    }
    getCurrentUser() {
        const userStr = localStorage.getItem("user");
        if (userStr)
            return JSON.parse(userStr);
        return null;
    }
}
exports.default = new AuthService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vdWkvc3JjL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUEwQjtBQUUxQixNQUFNLE9BQU8sR0FBRyx3QkFBd0IsQ0FBQztBQUV6QyxNQUFNLFdBQVc7SUFDZixLQUFLLENBQUMsUUFBZ0IsRUFBRSxRQUFnQjtRQUN0QyxPQUFPLGVBQUs7YUFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBRTtZQUN2QixRQUFRO1lBQ1IsUUFBUTtTQUNULENBQUM7YUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQzdCLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDN0Q7WUFDRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsTUFBTTtRQUNKLFlBQVksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELFFBQVEsQ0FBQyxRQUFnQixFQUFFLFFBQWdCO1FBQ3pDLE9BQU8sZUFBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDekIsUUFBUTtZQUNSLFFBQVE7U0FDVCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsY0FBYztRQUNaLE1BQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsSUFBSSxPQUFPO1lBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGO0FBRUQsa0JBQWUsSUFBSSxXQUFXLEVBQUUsQ0FBQyJ9