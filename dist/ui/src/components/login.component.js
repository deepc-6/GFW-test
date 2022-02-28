"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
// import { useNavigate } from "reach-router";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import { useForm } from "react-hook-form";
// import * as Yup from "yup";
const auth_service_1 = __importDefault(require("../services/auth.service"));
class Login extends react_1.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        };
    }
    // validationSchema() {
    //   return Yup.object().shape({
    //     username: Yup.string().required("This field is required!"),
    //     password: Yup.string().required("This field is required!"),
    //   });
    // }
    handleLogin(formValue) {
        const { username, password } = formValue;
        this.setState({
            message: "",
            loading: true
        });
        auth_service_1.default.login(username, password).then(() => {
            // const navigate = useNavigate();
            // navigate("/me");
            window.location.reload();
        }, error => {
            const resMessage = (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();
            this.setState({
                loading: false,
                message: resMessage
            });
        });
    }
    render() {
        const { loading, message } = this.state;
        const initialValues = {
            username: "",
            password: "",
        };
        return (<div className="col-md-12">
        <div className="card card-container">
          <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card"/>

          {/* <Formik
              initialValues={initialValues}
              // validationSchema={this.validationSchema}
              onSubmit={this.handleLogin}
            >
              <Form>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Field name="username" type="text" className="form-control" />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
  
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field name="password" type="password" className="form-control" />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
  
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Login</span>
                  </button>
                </div>
  
                {message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {message}
                    </div>
                  </div>
                )}
              </Form>
            </Formik> */}
        </div>
      </div>);
    }
}
exports.default = Login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vdWkvc3JjL2NvbXBvbmVudHMvbG9naW4uY29tcG9uZW50LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlDQUFrQztBQUNsQyw4Q0FBOEM7QUFDOUMsOERBQThEO0FBQzlELDZDQUE2QztBQUM3Qyw4QkFBOEI7QUFFOUIsNEVBQW1EO0FBV25ELE1BQXFCLEtBQU0sU0FBUSxpQkFBdUI7SUFDeEQsWUFBWSxLQUFZO1FBQ3RCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLFFBQVEsRUFBRSxFQUFFO1lBQ1osUUFBUSxFQUFFLEVBQUU7WUFDWixPQUFPLEVBQUUsS0FBSztZQUNkLE9BQU8sRUFBRSxFQUFFO1NBQ1osQ0FBQztJQUNKLENBQUM7SUFFRCx1QkFBdUI7SUFDdkIsZ0NBQWdDO0lBQ2hDLGtFQUFrRTtJQUNsRSxrRUFBa0U7SUFDbEUsUUFBUTtJQUNSLElBQUk7SUFFSixXQUFXLENBQUMsU0FBaUQ7UUFDM0QsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxTQUFTLENBQUM7UUFFekMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNaLE9BQU8sRUFBRSxFQUFFO1lBQ1gsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7UUFHSCxzQkFBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUN4QyxHQUFHLEVBQUU7WUFDSCxrQ0FBa0M7WUFDbEMsbUJBQW1CO1lBQ25CLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxFQUNELEtBQUssQ0FBQyxFQUFFO1lBQ04sTUFBTSxVQUFVLEdBQ2QsQ0FBQyxLQUFLLENBQUMsUUFBUTtnQkFDYixLQUFLLENBQUMsUUFBUSxDQUFDLElBQUk7Z0JBQ25CLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDOUIsS0FBSyxDQUFDLE9BQU87Z0JBQ2IsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBRW5CLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1osT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsT0FBTyxFQUFFLFVBQVU7YUFDcEIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTTtRQUNKLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUV4QyxNQUFNLGFBQWEsR0FBRztZQUNwQixRQUFRLEVBQUUsRUFBRTtZQUNaLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQztRQUVGLE9BQU8sQ0FDTCxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUN4QjtRQUFBLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FDbEM7VUFBQSxDQUFDLEdBQUcsQ0FDRixHQUFHLENBQUMsNkNBQTZDLENBQ2pELEdBQUcsQ0FBQyxhQUFhLENBQ2pCLFNBQVMsQ0FBQyxrQkFBa0IsRUFHOUI7O1VBQUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkEyQ1csQ0FDZDtRQUFBLEVBQUUsR0FBRyxDQUNQO01BQUEsRUFBRSxHQUFHLENBQUMsQ0FDUCxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBcEhELHdCQW9IQyJ9