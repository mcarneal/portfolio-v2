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
import Image from '../../personalTerminal.png'
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

export default function PersonalTerminalCard() {
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
        title="Making a more personal terminal"
        subheader="Febuary, 15th 2019"
      />
      <CardMedia
        className={classes.media}
        image={Image}
        title="Paella dish"
      />
      <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
        What is the first thing that comes to mind when you think of a computer programmer?
          </Typography>
    </CardContent>
        <Button size="small" color="primary">
          <a href="https://medium.com/@mgordoncarneal/making-a-more-personal-terminal-78f3d08aa7a1" target="_blank" style={{ textDecoration : 'none' }}>Read More</a>
        </Button>
    </Card>
    </Fade>
  );
}


