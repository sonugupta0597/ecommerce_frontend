import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import TreeView from './TreeView';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  dropdown: {
    position: 'absolute',
    width:100,
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1000,
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ClickAway() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        <button type="button" className={'head'} style={{backgroundColor:'white',border:'none'}} onClick={handleClick}>
          Home
        </button>
        {open ? (
          <div className={classes.dropdown}>
            <TreeView/>
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}
