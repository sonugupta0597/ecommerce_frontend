import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { red } from '@material-ui/core/colors';
import Card_Rating from './Card_Rating';
import Card_Price from './Card_Price';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} style={{ marginRight: '20px', padding: '10px' }}>

      <CardMedia
        className={classes.media}
        image="1.jpg"
        title="Paella dish"
      />
      <CardContent>

        <h4 style={{ fontSize: '18px' }}>Apple Mac Pro</h4>
        <Card_Rating/>
        <Card_Price/>
      </CardContent>

    </Card>
  );
}
