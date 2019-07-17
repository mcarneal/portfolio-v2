import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
        flexShrink: 0
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
      width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ResponsiveDrawer(props) {
  const { children }= props;
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
    
  function handleClickListItem(event) {
    setAnchorEl(event.currentTarget);
  }

    const handleMenuItemClick = (event, index)=> {
    setSelectedIndex(index);
        setAnchorEl(null);
        props.aboutClickHandler(event.target.innerText)
  }

  function handleClose() {
    setAnchorEl(null);
  }  

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
      <div>
          <Hidden smDown>
              <div className={classes.toolbar} />
      </Hidden>
      <Divider />
      <MenuList >
              {['Projects', 'Resume', 'Blog', 'About','Contact'].map((text, index) => (
                  <MenuItem
                     component={Link}
                      to={`/${text}`}
                     key={text}
                    selected={index === selectedIndex}
                onClick={event => handleMenuItemClick(event, index)}
            >
                    {text}
    </MenuItem>
              ))}
    <Divider />
    <br></br>
            <MenuItem
                onClick={props.changeThemeHandler}
            >
        Change Theme
    </MenuItem>

      </MenuList>
    </div>
  );

    return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed"
          className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
          Michael Carneal
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="Mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
            <Drawer
            
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
        </nav>
        <main className={classes.content}>
            <div className={classes.toolbar} />
                {children}
        </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
};
