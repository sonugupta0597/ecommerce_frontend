import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function SignInForm() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <div className={classes.margin}>
                <h1 style={{ color: 'pink' }}>SignIn</h1>
                <FormControl className={clsx(classes.margin, classes.textField)}>
                    <Grid container spacing={1} alignItems="flex-end">

                        <Grid item>
                            <TextField id="input-with-icon-grid" label="Enter Email" />
                        </Grid>


                    </Grid>
                </FormControl>

                <Grid container spacing={1} alignItems="flex-end">


                    <FormControl className={clsx(classes.margin, classes.textField)}>
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>


                </Grid>
                <Grid container spacing={1} alignItems="flex-end">


                    <FormControl className={clsx(classes.margin, classes.textField)} style={{ width: '100%' }}>
                        <Button variant="contained" color="primary" style={{ width: '100%' }}>
                            logIn
                        </Button>
                    </FormControl>


                </Grid>
            </div>
        </div>
    );
}
