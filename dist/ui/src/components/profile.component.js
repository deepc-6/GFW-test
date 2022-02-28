"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
// import { Navigate } from "reach-router";
const auth_service_1 = __importDefault(require("../services/auth.service"));
class Profile extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: null,
            userReady: false,
            currentUser: { accessToken: "" }
        };
    }
    componentDidMount() {
        const currentUser = auth_service_1.default.getCurrentUser();
        if (!currentUser)
            this.setState({ redirect: "/home" });
        this.setState({ currentUser: currentUser, userReady: true });
    }
    render() {
        if (this.state.redirect) {
            return null;
            // return <Navigate to={this.state.redirect} />
        }
        const { currentUser } = this.state;
        return (<div className="container">
        {(this.state.userReady) ?
                <div>
            <header className="jumbotron">
              <h3>
                <strong>{currentUser.username}</strong> Profile
              </h3>
            </header>
            <p>
              <strong>Token:</strong>{" "}
              {currentUser.accessToken.substring(0, 20)} ...{" "}
              {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
            </p>
          </div> : null}
      </div>);
    }
}
exports.default = Profile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi91aS9zcmMvY29tcG9uZW50cy9wcm9maWxlLmNvbXBvbmVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpQ0FBa0M7QUFDbEMsMkNBQTJDO0FBRTNDLDRFQUFtRDtBQVVuRCxNQUFxQixPQUFRLFNBQVEsaUJBQXVCO0lBQzFELFlBQVksS0FBWTtRQUN0QixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFYixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsUUFBUSxFQUFFLElBQUk7WUFDZCxTQUFTLEVBQUUsS0FBSztZQUNoQixXQUFXLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFO1NBQ2pDLENBQUM7SUFDSixDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsTUFBTSxXQUFXLEdBQUcsc0JBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUVqRCxJQUFJLENBQUMsV0FBVztZQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUM5RCxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDdkIsT0FBTyxJQUFJLENBQUM7WUFDWiwrQ0FBK0M7U0FDaEQ7UUFFRCxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUVuQyxPQUFPLENBQ0wsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FDeEI7UUFBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixDQUFDLEdBQUcsQ0FDRjtZQUFBLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQzNCO2NBQUEsQ0FBQyxFQUFFLENBQ0Q7Z0JBQUEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxDQUFFO2NBQzFDLEVBQUUsRUFBRSxDQUNOO1lBQUEsRUFBRSxNQUFNLENBQ1I7WUFBQSxDQUFDLENBQUMsQ0FDQTtjQUFBLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQzNCO2NBQUEsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUUsSUFBRyxDQUFDLEdBQUcsQ0FDbEQ7Y0FBQSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUN0RTtZQUFBLEVBQUUsQ0FBQyxDQUNMO1VBQUEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNqQjtNQUFBLEVBQUUsR0FBRyxDQUFDLENBQ1AsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQTVDRCwwQkE0Q0MifQ==