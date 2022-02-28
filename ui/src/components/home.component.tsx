import { useEffect, useState } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import UserService from "../services/user.service";

interface User {
  _id: string;
  username: string;
};

const Home = () => {
  const [users, setUsers] = useState<object[] | []>([]);

  const getAllUsers = () => {
    UserService.getAllUsers().then(
      response => {
        setUsers(response.data);
      },
      error => {
        setUsers(
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        );
      }
    );
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(users as User[]).map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user.username}</TableCell>
            </TableRow>
          ))}
          {!users.length
          ? (
            <TableRow>
              <TableCell>{'No users found'}</TableCell>
            </TableRow>
          ) : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Home;