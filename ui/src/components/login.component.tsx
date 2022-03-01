import React, { SyntheticEvent, useState } from 'react';
import { navigate } from '@reach/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useTranslation } from 'react-i18next';

import { login } from '../services/auth.service';
import useStyles from '../styles';

const Alert = (props: any) => (
  <MuiAlert elevation={6} variant="filled" {...props} />
);

const Login = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [errorMessage, setErrorMessage] = useState<string | ''>('');
  const [openError, setOpenError] = useState<boolean | false>(false);

  const translations = {
    login: t('login'),
  };

  const validationSchema = () =>
    Yup.object().shape({
      username: Yup.string().required('This field is required'),
      password: Yup.string().required('This field is required'),
    });

  const handleErrorClose = (
    event: SyntheticEvent<any, Event>,
    reason: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenError(false);
  };

  const handleLogin = (formValue: { username: string; password: string }) => {
    const { username, password } = formValue;

    login(username, password).then(
      () => {
        navigate('/me');
        window.location.reload();
      },
      () => {
        const resMessage = 'Invalid email and / or password';

        setErrorMessage(resMessage);
        setOpenError(true);
      }
    );
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  return (
    <div className={classes.container}>
      {errorMessage && (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={openError}
          autoHideDuration={5000}
          onClose={handleErrorClose}
        >
          <Alert onClose={handleErrorClose} severity="error">
            {errorMessage}
          </Alert>
        </Snackbar>
      )}
      <div className={classes.container}>
        <Typography variant="h6">{translations.login}</Typography>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <TextField
            className={classes.textField}
            fullWidth
            id="username"
            name="username"
            label="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            className={classes.textField}
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
          >
            {translations.login}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
