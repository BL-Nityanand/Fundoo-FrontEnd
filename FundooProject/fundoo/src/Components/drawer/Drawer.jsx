import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ListItem from '@mui/material/ListItem';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import { lineHeight, positions } from '@mui/system';
import './Drawer.css'
import {connect} from 'react-redux';


const drawerWidth = 240;
const margin = 64;

const openedMixin = (theme) => ({
    width: drawerWidth, marginTop: margin,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    marginTop: margin,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

 function Drawer1(prop) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };

    // const handleDrawerClose = () => {
    //     setOpen(false);
    // };

    const noteChoice=(typeOfNote)=>{
        prop.listenToSideNavBar(typeOfNote)
        prop.dispatch({type : `${typeOfNote}`})
    }

    return (
        <Box className='drawerMain'>
            <CssBaseline />

            <Drawer variant="permanent" open={prop.drawer}>

                <Divider />
                <List >
                    <ListItem button onClick={()=>noteChoice('notes')}>
                        <ListItemIcon>
                        <LightbulbIcon />
                        </ListItemIcon>
                        <ListItemText primary='Notes' />
                    </ListItem>
                    <ListItem button onClick={()=>noteChoice('reminder')}>
                        <ListItemIcon>
                        <NotificationsIcon />
                        </ListItemIcon>
                        <ListItemText primary='Reminders'/>
                    </ListItem>
                    <ListItem button onClick={()=>noteChoice('edit')}>
                        <ListItemIcon>
                        <ModeEditIcon />
                        </ListItemIcon>
                        <ListItemText primary='Edit labels'/>
                    </ListItem>
                    <ListItem button onClick={()=>noteChoice('archive')}>
                        <ListItemIcon>
                        <ArchiveIcon />
                        </ListItemIcon>
                        <ListItemText primary='Archive'/>
                    </ListItem>
                    <ListItem button onClick={()=>noteChoice('trash')}>
                        <ListItemIcon>
                        <DeleteIcon />
                        </ListItemIcon>
                        <ListItemText primary='Trash'/>
                    </ListItem>
                </List>

            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />

            </Box>
        </Box>
    );
}

export default connect()(Drawer1) 
