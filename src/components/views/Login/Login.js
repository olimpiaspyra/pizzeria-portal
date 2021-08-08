import React from 'react';
import styles from './Login.module.scss';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';


const Login = () => {

  return (
    <div className={styles.component}>
      <Container maxWidth='sm'>
        <FormControl>
          <Typography component='h1' variant='h4' align='center'>
          Sign in
          </Typography>
          <TextField
            id="outlined-name-input"
            label="Name"
            variant="outlined"
            autoComplete="name"
            required
            fullWidth
            autoFocus
            margin='normal'
          >
          </TextField>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            required
            fullWidth
            autoFocus
            margin='normal'
          />
          <Button
            type="submit"
            label="Submit"
            color="primary"
            variant="contained"
            fullWidth
          >
          Submit
          </Button>
        </FormControl>
      </Container>
    </div>
  );
};

export default Login;
