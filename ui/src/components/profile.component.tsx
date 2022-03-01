import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import { useTranslation } from 'react-i18next';

import { getUserProfile } from '../services/user.service';
import useStyles from '../styles';

const Profile = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useState<string | null>('');

  const translations = {
    username: t('username'),
  };

  const getUsername = () => {
    getUserProfile().then(
      (response) => {
        setCurrentUser(response.data);
      },
      () => {
        setCurrentUser(null);
        navigate('/');
      }
    );
  };

  useEffect(() => {
    getUsername();
  }, []);

  return (
    <div className={classes.container}>
      {currentUser && <h2>{`${translations.username}: ${currentUser}`}</h2>}
    </div>
  );
};

export default Profile;
