import React from 'react';
import './styles.css';
import { makeStyles, TextField, Grid, Button } from '@material-ui/core';
import loginImg from '../../assets/login.jpg';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    color: '#42284A',
    fontSize: 56,
    padding: theme.spacing(2),
    marginTop: 100
  },
  input: {
    width: '100%'
  },
  btnlogin: {
    marginTop: 25,
    fontWeight: 800,
    fontSize: 15,
    color: '#42284A',
    backgroundColor: '#5F8286' 
  }
}));

export default function Login() {
  const classes = useStyles();

  return (
      <Grid container>
        
        <Grid item xs={12} md={7} sm={12} >
          <img src={loginImg} alt="Imagem Login"/>
        </Grid>


        <Grid item xs={12} md={5} sm={12} >
           <h1 className={classes.title}>LOGIN</h1>

          <form className="form-login">
            <TextField m={2}  label="Usuário" id="usuario" margin="dense" variant="outlined" />
            {/* <a href="#" className={classes.link}>Esqueci a senha</a> */}
            <TextField m={2} className={classes.input} label="Senha" id="senha" margin="dense" variant="outlined" />

            <Button variant="contained" size="large" className={classes.btnlogin}>
              Entrar
            </Button>
          </form>

        </Grid>
          


      </Grid>
  );
}