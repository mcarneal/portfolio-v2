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
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Fade from '@material-ui/core/Fade';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


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
    maxWidth: 450,
  },
    dialogPaper: {
        minHeight: 'auto',
        maxHeight: '80vh',
    }
});
function SimpleDialog(props) {
 const classes = useStyles();
 const { onClose, selectedValue, ...other } = props;
 const [fullWidth, setFullWidth] = React.useState(true);
 const [maxWidth, setMaxWidth] = React.useState('md');
   

    function handleClose() {
    onClose(selectedValue);
  }

    function handleListItemClick(value) {
    onClose(value);
  }

  return (
      <Dialog 
         classes={{paper : classes.dialogPaper}}
         fullWidth={fullWidth}
         maxWidth={maxWidth}
         onClose={handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <iframe 
            style={{
                width : '100%',
                height : '50vh'
            }}
        src="https://www.youtube.com/embed/VlNON2ZcYac"
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
/>
    </Dialog>
  );
}

export default function ImgMediaCard(props) {

    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  function handleClickOpen() {
    setOpen(true);
  }

  const handleClickClose = value => {
    setOpen(false);
  };

 const classes = useStyles();
    return (
        <Fade in={true} timeout={1000}>
        <Box style={styles.Box}>
      <Card className={classes.card}>
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
A social media based web app designed for members to share good or bad interactions. Where members can rate others to encourage positive moral behavior. 

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={handleClickOpen} size="small" color="primary">
          Demo
        </Button>
 <SimpleDialog  open={open} onClose={handleClickClose} />
        <Button size="small" color="primary" onClick={handleClick}>
          GitHub
        </Button>
<Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
>
    <a href="https://github.com/mcarneal/karma-calculator-frontend" target="_blank" style={{ textDecoration : 'none' }}>
            <MenuItem onClick={handleClose}>Front End</MenuItem>
        </a>
<a href="https://github.com/mcarneal/karma-calculator-backend" target="_blank" style={{ textDecoration : 'none' }}>

    <MenuItem onClick={handleClose}>Back End</MenuItem>
    </a>
      </Menu>
      </CardActions>
  </Card>
  </Box>
  </Fade>
  );
}
