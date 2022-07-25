import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { makeStyles } from '@mui/styles';
import { border, width } from '@mui/system';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingOptions from '../SettingOptions/SettingOptions';
import AppsIcon from '@mui/icons-material/Apps';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import {connect} from 'react-redux';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const useStyles = makeStyles({
  mainBoxMain :{
         backgroundColor: 'white !important',
    border: 'spx solid red',
    borderRadius: 3,
    flexGrow: 1, 
    position:'absolute'
    // border:'2px solid red'
    },

    imageStyle:{
      height:40,
      width:35
    },

    SearchField:{
      width: 720,
      height:45,
      color:'black',
      backgroundColor:'#fffff',
      borderRadius:8,
      border:'1px solid lightGrey'
    },
    boxOne:{
      display:'flex',
      flexDirection:'row',
      // border:'2px solid green',
      width: 140,
      height:40,
      justifyContent:'space-between',
      alignItems:'center',
      color:'black'
    },

    compColor:{
      color:'black'
    },
    searchBox:{
      color:'black',
      position:'relative',
      right:70,
      border:'grey',

      '@media(minWidth: 320px)' : {
        display:'none'
      }
    },
    boxIconSet:{
      display:'flex',
      flexDirection:'row',
      width:130,
      color:'black',
      position:'relative',
      right:80,
      // border:'2px solid red',
      justifyContent:'space-between',
    },
    boxAccDetail:{
      display:'flex',
      flexDirection:'row',
      // border:'2px solid red',
      width: 120,
      justifyContent:'space-between',
      color:'black',


    },
    searchIconCss:{
      color:'black'
    },

    
    
})

 function HeaderOne(props) {
    

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const classes = useStyles();

  const OpenDrawer=()=>{
    props.listerToHeader()
}

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <MailIcon />
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
       
            <NotificationsIcon />
  
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box  >
      <AppBar  className={classes.mainBoxMain}>
        <Toolbar>
          <Box className={classes.boxOne}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            // sx={{ mr: 2 }}
          >
            <MenuIcon  onClick={OpenDrawer}/>
            
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            // sx={{ mr: 2 }}
          >
            <img className={classes.imageStyle} src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="" />
          </IconButton>
          <Typography
            className={classes.KeepLable}
            variant="h7"
            noWrap
            component="div"
            style={{ width:100, height:30}}
            // sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            {props.title}
          </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />

          <Search className={classes.searchBox}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              className={classes.SearchField}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box className={classes.boxIconSet}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">

                {/* <MailIcon /> */}
                <RefreshIcon />
            </IconButton>
            <IconButton
              size="small"
              aria-label="show 17 new notifications"
              color="inherit"
            >

                {/* <NotificationsIcon /> */}
                <ViewStreamIcon/>
            </IconButton>
            <IconButton
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {/* <AccountCircle /> */}
              <SettingOptions/>
            </IconButton>
          </Box>
           <Box className={classes.boxAccDetail}>
            <IconButton
              size="small"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
               <AppsIcon fontSize='medium'></AppsIcon>
            </IconButton>
            <IconButton
              size="small"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <AccountCircle  fontSize='large'></AccountCircle>
            </IconButton>

          </Box>
          {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>

          </Box> */}
        </Toolbar>
      </AppBar>
      
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
      title: state.drawerReducer.title,
  };
};

export default connect(mapStateToProps)(HeaderOne)