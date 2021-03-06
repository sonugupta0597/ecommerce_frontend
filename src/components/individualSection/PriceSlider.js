import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 100,
    label: '100',
  }
];



export default function PriceSlider() {
  const classes = useStyles();
  const [data, setdata] = useState([20,30]);
  
  const update = (e,data)=>{
    console.log(data)
    setdata(data)
  }

  return (
    <div className={classes.root}>
      
      <div className={classes.margin} />
      
      <Slider
        valueLabelDisplay="auto"
        defaultValue={data}
        marks={marks}
        onChange={ update }  
      />

      <h6>{`$${data[0]}-$${data[1]}`}</h6>
    </div>
  );
}
