"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const router_1 = require("@reach/router");
require("bootstrap/dist/css/bootstrap.min.css");
require("./App.css");
const auth_service_1 = __importDefault(require("./services/auth.service"));
const home_component_1 = __importDefault(require("./components/home.component"));
const EventBus_1 = __importDefault(require("./common/EventBus"));
let HomePage = (props) => <home_component_1.default />;
let LoginPage = (props) => <div>Login</div>;
let RegisterPage = (props) => <div>Register</div>;
let ProfilePage = (props) => <div>Profile</div>;
class App extends react_1.Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
        this.state = {
            currentUser: undefined,
        };
    }
    componentDidMount() {
        const user = auth_service_1.default.getCurrentUser();
        if (user) {
            this.setState({
                currentUser: user,
            });
        }
        EventBus_1.default.on("logout", this.logOut);
    }
    componentWillUnmount() {
        EventBus_1.default.remove("logout", this.logOut);
    }
    logOut() {
        const navigate = (0, router_1.useNavigate)();
        auth_service_1.default.logout();
        this.setState({
            currentUser: undefined,
        });
        navigate("/");
    }
    render() {
        const { currentUser } = this.state;
        return (<div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <router_1.Link to={"/home"} className="nav-link">
                Home
              </router_1.Link>
            </li>
          </div>

          {currentUser ? (<div className="navbar-nav ml-auto">
              <li className="nav-item">
                <router_1.Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </router_1.Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>) : (<div className="navbar-nav ml-auto">
              <li className="nav-item">
                <router_1.Link to={"/login"} className="nav-link">
                  Login
                </router_1.Link>
              </li>

              <li className="nav-item">
                <router_1.Link to={"/register"} className="nav-link">
                  Sign Up
                </router_1.Link>
              </li>
            </div>)}
        </nav>

        <div className="container mt-3">
          <router_1.Router>
            <HomePage path="/"/>
            <LoginPage path="/login"/>
            <RegisterPage path="/register"/>
            <ProfilePage path="/profile"/>
          </router_1.Router>
        </div>
      </div>);
    }
}
exports.default = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdWkvc3JjL0FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpQ0FBa0M7QUFDbEMsMENBQStFO0FBQy9FLGdEQUE4QztBQUM5QyxxQkFBbUI7QUFFbkIsMkVBQWtEO0FBR2xELGlGQUErQztBQUsvQyxpRUFBeUM7QUFFekMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxLQUEwQixFQUFFLEVBQUUsQ0FBQyxDQUFDLHdCQUFJLENBQUMsQUFBRCxFQUFHLENBQUM7QUFDeEQsSUFBSSxTQUFTLEdBQUcsQ0FBQyxLQUEwQixFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDakUsSUFBSSxZQUFZLEdBQUcsQ0FBQyxLQUEwQixFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdkUsSUFBSSxXQUFXLEdBQUcsQ0FBQyxLQUEwQixFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFRckUsTUFBcUIsR0FBSSxTQUFRLGlCQUF1QjtJQUN0RCxZQUFZLEtBQVk7UUFDdEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsV0FBVyxFQUFFLFNBQVM7U0FDdkIsQ0FBQztJQUNKLENBQUM7SUFFRCxpQkFBaUI7UUFDZixNQUFNLElBQUksR0FBRyxzQkFBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRTFDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDWixXQUFXLEVBQUUsSUFBSTthQUNsQixDQUFDLENBQUM7U0FDSjtR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