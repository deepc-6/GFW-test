"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const user_service_1 = __importDefault(require("../services/user.service"));
class Home extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        };
    }
    componentDidMount() {
        user_service_1.default.getAllUsers().then(response => {
            this.setState({
                content: response.data
            });
        }, error => {
            this.setState({
                content: (error.response && error.response.data) ||
                    error.message ||
                    error.toString()
            });
        });
    }
    render() {
        return (<div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header>
      </div>);
    }
}
exports.default = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi91aS9zcmMvY29tcG9uZW50cy9ob21lLmNvbXBvbmVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpQ0FBa0M7QUFFbEMsNEVBQW1EO0FBUW5ELE1BQXFCLElBQUssU0FBUSxpQkFBdUI7SUFDdkQsWUFBWSxLQUFZO1FBQ3RCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUViLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxPQUFPLEVBQUUsRUFBRTtTQUNaLENBQUM7SUFDSixDQUFDO0lBRUQsaUJBQWlCO1FBQ2Ysc0JBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQzVCLFFBQVEsQ0FBQyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDWixPQUFPLEVBQUUsUUFBUSxDQUFDLElBQUk7YUFDdkIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUNELEtBQUssQ0FBQyxFQUFFO1lBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDWixPQUFPLEVBQ0wsQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUN2QyxLQUFLLENBQUMsT0FBTztvQkFDYixLQUFLLENBQUMsUUFBUSxFQUFFO2FBQ25CLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELE1BQU07UUFDSixPQUFPLENBQ0wsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FDeEI7UUFBQSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUMzQjtVQUFBLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQzlCO1FBQUEsRUFBRSxNQUFNLENBQ1Y7TUFBQSxFQUFFLEdBQUcsQ0FBQyxDQUNQLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFwQ0QsdUJBb0NDIn0=