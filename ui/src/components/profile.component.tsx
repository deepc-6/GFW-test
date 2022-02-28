import { useEffect, useState } from "react";
import { navigate } from "@reach/router";

import UserService from "../services/user.service";
import useStyles from '../styles';

const Profile = () => {
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useState<string | null>('');

  const getUserProfile = () => {
    UserService.getUserProfile().then(
      response => {
        setCurrentUser(response.data);
      },
      () => {
        setCurrentUser(null);
        navigate("/");
      }
    );
  }

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div className={classes.container}>
      {currentUser && <h2>{`Username: ${currentUser}`}</h2>}
    </div>    
  );
}

export default Profile;