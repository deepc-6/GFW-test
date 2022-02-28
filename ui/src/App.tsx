import { useEffect, useState } from 'react';
import { Link, navigate, Router, RouteComponentProps } from '@reach/router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { useTranslation } from 'react-i18next';

import './i18n/config';
import { getCurrentUser, logout } from './services/auth.service';
import IUser from './types/user.type';
import Home from './components/home.component';
import Login from './components/login.component';
import Create from './components/create.component';
import Profile from './components/profile.component';
import EventBus from './common/EventBus';
import useStyles from './styles';

const HomePage = (props: RouteComponentProps) => <Home />;
const LoginPage = (props: RouteComponentProps) => <Login />;
const CreatePage = (props: RouteComponentProps) => <Create />;
const ProfilePage = (props: RouteComponentProps) => <Profile />;

const App = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useState<IUser | {}>({});

  const translations = {
    me: t('me'),
    createUser: t('create-user'),
    login: t('login'),
    logout: t('logout'),
  };

  const goHome = () => {
    navigate('/');
  };

  const onLogout = () => {
    logout();
    setCurrentUser({});
    navigate('/');
  };

  useEffect(() => {
    const user = getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    EventBus.on('logout', onLogout);

    return () => {
      EventBus.remove('logout', onLogout);
    };
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
              <Button>
                <Link to={'/me'} className={classes.link}>
                  {translations.me}
                </Link>
              </Button>
              <Button>
                <Link to={'/create'} className={classes.link}>
                  {translations.createUser}
                </Link>
              </Button>
              <Button>
                <Link to="/" onClick={onLogout} className={classes.link}>
                  {translations.logout}
                </Link>
              </Button>
            </div>
          ) : (
            <div>
              <Button>
                <Link to={'/create'} className={classes.link}>
                  {translations.createUser}
                </Link>
              </Button>
              <Button>
                <Link to={'/login'} className={classes.link}>
                  {translations.login}
                </Link>
              </Button>
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
};

export default App;
