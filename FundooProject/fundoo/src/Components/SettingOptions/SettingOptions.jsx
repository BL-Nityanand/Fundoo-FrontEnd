import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import SettingsIcon from '@mui/icons-material/Settings';


export default function SettingOptions() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div style={{width:'10', height:'40',lineHeight:0.5}}>
            {/* <button aria-describedby={id} type="button" onClick={handleClick}> */}
                <SettingsIcon onClick={handleClick} />
            {/* </button> */}
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
    
                    <ul>Setting </ul>
                    <ul>Enable Dark theme </ul>
                    <ul>Send feedback </ul>
                    <ul>Help </ul>
                    <ul>App Downloads</ul>
                    <ul>Keyboards Shortcuts</ul>
                </Box>
            </Popper>
        </div>
    );
}
