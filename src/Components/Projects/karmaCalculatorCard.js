import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from '../../image.png'
import CardHeader from '@material-ui/core/CardHeader';
import Box from '@material-ui/core/Box'

    const styles = {
    Box : {
        padding : 20,
        marginLeft : 5,
        marginRight : 5,
        height : 'auto',
    }
}



const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

    return (
        <Box style={styles.Box}>
      <Card className={classes.card}>
          <CardHeader
          title='Karma Calculator'>
      </CardHeader>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image= {Image}
          title="Karma Calculator"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
                    A simple to use ticketing system for a team of IT Professionals to organize, assign, and track client issues.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
  </Card>
  </Box>
  );
}
