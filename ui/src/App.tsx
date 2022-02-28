import { useEffect, useState } from "react";
import { Link, navigate, Router, RouteComponentProps} from "@reach/router";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

import AuthService from "./services/auth.service";
import IUser from './types/user.type';
import Home from "./components/home.component";
import Login from "./components/login.component";
import Create from "./components/create.component";
import Profile from "./components/profile.component";
import EventBus from "./common/EventBus";
import useStyles from './styles';

const HomePage = (props: RouteComponentProps) => <Home />;
const LoginPage = (props: RouteComponentProps) => <Login />;
const CreatePage = (props: RouteComponentProps) => <Create />;
const ProfilePage = (props: RouteComponentProps) => <Profile />;

const App = () => {
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useState<IUser | {}>({});

  const goHome = () => {
    navigate("/");
  };

  const logout = () => {
    AuthService.logout();
    setCurrentUser({});
    navigate("/");
  }

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    EventBus.on("logout", logout);

    return () => {
      EventBus.remove("logout", logout);
    }
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.appBar}>
          <IconButton color="inherit" edge="start" onClick={goHome}>
            <HomeIcon />
          </IconButton>
          {Object.keys(currentUser).length ? (  
            <div>
              <Button><Link to={"/me"} className={classes.link}>Me</Link></Button>
              <Button><Link to={"/create"} className={classes.link}>Create User</Link></Button>
              <Button><Link to="/" onClick={logout} className={classes.link}>Logout</Link></Button>
            </div>
          ) : (
            <div>
              <Button><Link to={"/create"} className={classes.link}>Create User</Link></Button>
              <Button><Link to={"/login"} className={classes.link}>Login</Link></Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <div className={classes.wrapper}>
        <Router>
          <CreatePage path="/create" />
          <HomePage path="/" />
          <LoginPage path="/login" />
          <ProfilePage path="/me" />
        </Router>
      </div>
    </div>
  );
}

export default App;