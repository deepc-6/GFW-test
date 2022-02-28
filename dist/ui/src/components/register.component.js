"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
const auth_service_1 = __importDefault(require("../services/auth.service"));
class Register extends react_1.Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.state = {
            username: "",
            email: "",
            password: "",
            successful: false,
            message: ""
        };
    }
    // validationSchema() {
    //   return Yup.object().shape({
    //     username: Yup.string()
    //       .test(
    //         "len",
    //         "The username must be between 3 and 20 characters.",
    //         (val: any) =>
    //           val &&
    //           val.toString().length >= 3 &&
    //           val.toString().length <= 20
    //       )
    //       .required("This field is required!"),
    //     email: Yup.string()
    //       .email("This is not a valid email.")
    //       .required("This field is required!"),
    //     password: Yup.string()
    //       .test(
    //         "len",
    //         "The password must be between 6 and 40 characters.",
    //         (val: any) =>
    //           val &&
    //           val.toString().length >= 6 &&
    //           val.toString().length <= 40
    //       )
    //       .required("This field is required!"),
    //   });
    // }
    handleRegister(formValue) {
        const { username, password } = formValue;
        this.setState({
            message: "",
            successful: false
        });
        auth_service_1.default.register(username, password).then(response => {
            this.setState({
                message: response.data.message,
                successful: true
            });
        }, error => {
            const resMessage = (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();
            this.setState({
                successful: false,
                message: resMessage
            });
        });
    }
    render() {
        const { successful, message } = this.state;
        const initialValues = {
            username: "",
            email: "",
            password: "",
        };
        return (<div className="col-md-12">
        <div className="card card-container">
          <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card"/>

          {/* <Formik
              initialValues={initialValues}
              // validationSchema={this.validationSchema}
              onSubmit={this.handleRegister}
            >
              <Form>
                {!successful && (
                  <div>
                    <div className="form-group">
                      <label htmlFor="username"> Username </label>
                      <Field name="username" type="text" className="form-control" />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="alert alert-danger"
                      />
                    </div>
  
                    <div className="form-group">
                      <label htmlFor="email"> Email </label>
                      <Field name="email" type="email" className="form-control" />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="alert alert-danger"
                      />
                    </div>
  
                    <div className="form-group">
                      <label htmlFor="password"> Password </label>
                      <Field
                        name="password"
                        type="password"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="alert alert-danger"
                      />
                    </div>
  
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    </div>
                  </div>
                )}
  
                {message && (
                  <div className="form-group">
                    <div
                      className={
                        successful ? "alert alert-success" : "alert alert-danger"
                      }
                      role="alert"
                    >
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
exports.default = Register;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vdWkvc3JjL2NvbXBvbmVudHMvcmVnaXN0ZXIuY29tcG9uZW50LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlDQUFrQztBQUNsQyw4REFBOEQ7QUFDOUQsOEJBQThCO0FBRTlCLDRFQUFtRDtBQVluRCxNQUFxQixRQUFTLFNBQVEsaUJBQXVCO0lBQzNELFlBQVksS0FBWTtRQUN0QixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXJELElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxRQUFRLEVBQUUsRUFBRTtZQUNaLEtBQUssRUFBRSxFQUFFO1lBQ1QsUUFBUSxFQUFFLEVBQUU7WUFDWixVQUFVLEVBQUUsS0FBSztZQUNqQixPQUFPLEVBQUUsRUFBRTtTQUNaLENBQUM7SUFDSixDQUFDO0lBRUQsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiwrREFBK0Q7SUFDL0Qsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsd0NBQXdDO0lBQ3hDLFVBQVU7SUFDViw4Q0FBOEM7SUFDOUMsMEJBQTBCO0lBQzFCLDZDQUE2QztJQUM3Qyw4Q0FBOEM7SUFDOUMsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsK0RBQStEO0lBQy9ELHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLHdDQUF3QztJQUN4QyxVQUFVO0lBQ1YsOENBQThDO0lBQzlDLFFBQVE7SUFDUixJQUFJO0lBRUosY0FBYyxDQUFDLFNBQWlEO1FBQzlELE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsU0FBUyxDQUFDO1FBRXpDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDWixPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxLQUFLO1NBQ2xCLENBQUMsQ0FBQztRQUVILHNCQUFXLENBQUMsUUFBUSxDQUNsQixRQUFRLEVBQ1IsUUFBUSxDQUNULENBQUMsSUFBSSxDQUNKLFFBQVEsQ0FBQyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDWixPQUFPLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPO2dCQUM5QixVQUFVLEVBQUUsSUFBSTthQUNqQixDQUFDLENBQUM7UUFDTCxDQUFDLEVBQ0QsS0FBSyxDQUFDLEVBQUU7WUFDTixNQUFNLFVBQVUsR0FDZCxDQUFDLEtBQUssQ0FBQyxRQUFRO2dCQUNiLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSTtnQkFDbkIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUM5QixLQUFLLENBQUMsT0FBTztnQkFDYixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDWixVQUFVLEVBQUUsS0FBSztnQkFDakIsT0FBTyxFQUFFLFVBQVU7YUFDcEIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTTtRQUNKLE1BQU0sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUUzQyxNQUFNLGFBQWEsR0FBRztZQUNwQixRQUFRLEVBQUUsRUFBRTtZQUNaLEtBQUssRUFBRSxFQUFFO1lBQ1QsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO1FBRUYsT0FBTyxDQUNMLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQ3hCO1FBQUEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUNsQztVQUFBLENBQUMsR0FBRyxDQUNGLEdBQUcsQ0FBQyw2Q0FBNkMsQ0FDakQsR0FBRyxDQUFDLGFBQWEsQ0FDakIsU0FBUyxDQUFDLGtCQUFrQixFQUc5Qjs7VUFBQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQTZEVyxDQUNkO1FBQUEsRUFBRSxHQUFHLENBQ1A7TUFBQSxFQUFFLEdBQUcsQ0FBQyxDQUNQLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFoS0QsMkJBZ0tDIn0=