import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Linux from '../../linux.png'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
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

export default function LinuxAndMeCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

    return (
        <Fade in={true} timeout={1000}>
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            MC
          </Avatar>
        }
        title="Linux and Me"
        subheader="April, 4th 2019"
      />
      <CardMedia
        className={classes.media}
        image={Linux}
        title="Paella dish"
      />
      <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
                  If I were to ask you what your favorite distribution of linux was, I would expect one of two responses...
        </Typography>
    </CardContent>
        <Button size="small" color="primary">
          <a href="https://medium.com/@mgordoncarneal/linux-and-me-e4b47c43f046" target="_blank" style={{ textDecoration : 'none' }}>Read More</a>
        </Button>
    </Card>
</Fade>
  );
}
