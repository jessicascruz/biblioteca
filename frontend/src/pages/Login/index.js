import React, { useState, useRef } from 'react';
import './styles.css';
import { makeStyles, TextField, Grid, Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';
import loginImg from '../../assets/login.jpg';
import api from '../../services/api';
import { Formik } from 'formik';
import * as Yup from 'yup';


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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Schema = Yup.object().shape({
  email: Yup.string()
    .email('Informe um email válido')
    .required('Email é obrigatório'),
  senha: Yup.string()
    .min(3, 'Informe a senha correta')
    .required('Senha é obrigatória')
})

export default function Login(props) {
  const classes = useStyles();
  const [erroApi, setErroApi] = useState(false);
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  const toastRef = useRef(null);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

      return (
        <Grid container>
        <Grid item xs={12} md={7} sm={12} >
          <img src={loginImg} alt="Imagem Login"/>
        </Grid>
        <Grid item xs={12} md={5} sm={12} >
        <Snackbar open={open} ref={toastRef} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal:'right' }} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            {errorMessage}
          </Alert>
        </Snackbar>

           <h1 className={classes.title}>LOGIN</h1>

           <Formik
            initialValues={{ email: '', senha:''}}
            validationSchema={Schema}
            onSubmit={values => {

                api.post('session', values)
                .then((resp) => {
                  if(!!resp.data.error) {
                    setErrorMessage(resp.data.error);
                    setErroApi(true);
                    setOpen(true);
                  }else {

                    localStorage.setItem('usuarioId', resp.data.id);
                    localStorage.setItem('usuarioName', resp.data.nome);

                    history.push('/acervo');
                  }
                })

            }}>

{({ errors, touched, handleBlur, handleChange, values, handleSubmit }) => (

          <form className="form-login" onSubmit={handleSubmit}>
            <TextField m={2}  
              label="Email" 
              name="email" 
              margin="dense" 
              variant="outlined"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              error={(errors.email && touched.email) || erroApi}
              helperText={(errors.email && touched.email) && errors.email} />
            {/* <a href="#" className={classes.link}>Esqueci a senha</a> */}
            <TextField m={2} 
              className={classes.input} 
              label="Senha" 
              name="senha" 
              type="password"
              margin="dense" 
              variant="outlined"
              value={values.senha}
              onBlur={handleBlur}
              onChange={handleChange}
              error={(errors.senha && touched.senha) || erroApi }
              helperText={(errors.senha && touched.senha) && errors.senha} />

            <Button variant="contained" size="large" type="submit" className={classes.btnlogin}>
              Entrar
            </Button>
          </form>
        )}
  </Formik>

        </Grid>
      </Grid>  
      );
    }
