import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';

import { getAllUsers } from '../services/user.service';

interface User {
  _id: string;
  username: string;
}

const Home = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState<object[] | []>([]);

  const translations = {
    users: t('users'),
    noUsersFound: t('no-users-found'),
  };

  const getUsers = () => {
    getAllUsers().then(
      (response) => {
        setUsers(response.data);
      },
      () => {
        setUsers([]);
      }
    );
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{translations.users}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(users as User[]).map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user.username}</TableCell>
            </TableRow>
          ))}
          {!users.length ? (
            <TableRow>
              <TableCell>{translations.noUsersFound}</TableCell>
            </TableRow>
          ) : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Home;
