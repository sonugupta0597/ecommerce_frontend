import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function SimpleCard() {
    const classes = useStyles();

    return (
        <div style={{display:'flex',flexDirection:'row' , marginTop:'50px'}}>

            <Card className={classes.root} style={{ margin: '10px'  }}>
                <CardActionArea>
                    <LocalShippingIcon style={{ fontSize: '100px' , color:'rgb(251, 93, 40)' }} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Free Shipping
                    </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>
            <Card className={classes.root} style={{ margin: '10px' }}>
                <CardActionArea>
                    <MonetizationOnIcon style={{ fontSize: '100px' , color:'rgb(251, 93, 40)'}} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Refund
                    </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>
            <Card className={classes.root} style={{ margin: '10px',  }}>
                <CardActionArea>
                    <SupervisedUserCircleIcon style={{ fontSize: '100px',color:'rgb(251, 93, 40)' }} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Support 24/7
                    </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>

        </div>
    );
}
