import { SyntheticEvent, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useTranslation } from 'react-i18next';

import { createUser } from '../services/auth.service';
import useStyles from '../styles';

const Create = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [createSuccess, setCreateSuccess] = useState<boolean | false>(false);
  const [errorMessage, setErrorMessage] = useState<string | ''>('');
  const [openSuccess, setOpenSuccess] = useState<boolean | false>(false);
  const [openError, setOpenError] = useState<boolean | false>(false);

  const translations = {
    createUser: t('create-user'),
  };

  const Alert = (props: any) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  const validationSchema = () => {
    return Yup.object().shape({
      username: Yup.string().required('This field is required'),
      password: Yup.string()
        .test(
          'len',
          'The password must be at least 6 characters',
          (val: any) => val && val.toString().length >= 6
        )
        .required('This field is required'),
    });
  };

  const handleSuccessClose = (
    event: SyntheticEvent<any, Event>,
    reason: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccess(false);
  };

  const handleErrorClose = (
    event: SyntheticEvent<any, Event>,
    reason: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenError(false);
  };

  const handleCreateUser = (
    formValue: { username: string; password: string },
    resetForm: Function
  ) => {
    const { username, password } = formValue;

    setCreateSuccess(false);

    createUser(username, password).then(
      (response) => {
        if (response.status === 201) {
          setCreateSuccess(true);
          setErrorMessage('');
          setOpenSuccess(true);
          resetForm();
        }
      },
      (error) => {
        const resMessage =
          error.response && error.response.data && error.response.data.error;

        setCreateSuccess(false);
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
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      handleCreateUser(values, resetForm);
    },
  });

  return (
    <div className={classes.container}>
      {createSuccess && (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={openSuccess}
          autoHideDuration={5000}
          onClose={handleSuccessClose}
        >
          <Alert onClose={handleSuccessClose} severity="success">
            {'User created successfully'}
          </Alert>
        </Snackbar>
      )}
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
        <Typography variant="h6">{translations.createUser}</Typography>
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
            {translations.createUser}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Create;
