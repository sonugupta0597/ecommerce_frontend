import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button, MenuItem, Select } from '@material-ui/core';
import SignUpModal from './SignUpModal';
import { useDispatch } from 'react-redux';
import SiginUp from './SignUpModal'
import SignInModal from './SignInModal';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [lang, setLang] = useState(1)
  const [currency, setCurrency] = useState(1)
  const [modalState, setmodalState] = useState(false)

  const dispatch = useDispatch();

  

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid className='navbar' item xs={12}>
          <div className='navbarleft'>
            <div>
              <Select displayEmpty value={lang} style={{ fontWeight: '1' }} onChange={(e) => setLang(e.target.value)}>
                <MenuItem value={1}>English</MenuItem>
                <MenuItem value={2}>Hindi</MenuItem>

              </Select>
            </div>
            <div style={{ marginLeft: '5px' }}>
              <Select displayEmpty value={currency} style={{ fontWeight: '1' }} onChange={(e) => setCurrency(e.target.value)}>
                <MenuItem value={1}>$</MenuItem>
                <MenuItem value={2}>₹</MenuItem>

              </Select>
            </div>
          </div>
          <div className='navbarleft' style={{ color: 'grey' }}>
            <div className='navbarleft'><AccountCircleIcon /><h5 className='navbarTopMargin' style={{ fontWeight: '1' }}>profile</h5></div>
            <div className='navbarleft'> <AddShoppingCartIcon /><h5 className='navbarTopMargin' style={{ fontWeight: '1' }}>3 items</h5><h5 className='navbarTopMargin' style={{ fontWeight: '1' }}>$ 6786</h5></div>
            
              <SiginUp/>
              <SignInModal/>
          </div>
        </Grid>


      </Grid>
      
    </div>
  );
}
