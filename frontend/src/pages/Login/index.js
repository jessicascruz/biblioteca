import React from 'react';
import './styles.css';
import { makeStyles, TextField, Grid, Button } from '@material-ui/core';
import loginImg from '../../assets/login.jpg';
import api from '../../services/api';
import { Formik, Form, Field } from 'formik';
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

      return (
        <Grid container>
        <Grid item xs={12} md={7} sm={12} >
          <img src={loginImg} alt="Imagem Login"/>
        </Grid>
        <Grid item xs={12} md={5} sm={12} >
           <h1 className={classes.title}>LOGIN</h1>

           <Formik
            initialValues={{ email: '', senha:''}}
            validationSchema={Schema}
            onSubmit={values => {
              try{
                console.log('values', values);
                api.post('session', values)
                  .then((resp) => {
                  console.log('response', resp)
                })
              }catch(err) {
                alert('Falha no login');
              }

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
              error={errors.email && touched.email}
              helperText={(errors.email && touched.email) && errors.email} />
            {/* <a href="#" className={classes.link}>Esqueci a senha</a> */}
            <TextField m={2} 
              className={classes.input} 
              label="Senha" 
              name="senha" 
              margin="dense" 
              variant="outlined"
              value={values.senha}
              onBlur={handleBlur}
              onChange={handleChange}
              error={errors.senha && touched.senha}
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
