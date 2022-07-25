import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Search from '@mui/icons-material/Search';
import SearchIconWrapper from '@mui/icons-material/Search';
import StyledInputBase from '@mui/icons-material/Search';
import './Header.css'
import { Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import RefreshIcon from '@mui/icons-material/Refresh';
import AppsIcon from '@mui/icons-material/Apps';
import PersonIcon from '@mui/icons-material/Person';
import InputBase from '@mui/material/InputBase';
import SettingOptions from '../SettingOptions/SettingOptions';

// import SearchIcon from '@mui/icons-material/Search';




function Header(props) {

  const OpenDrawer=()=>{
      props.listerToHeader()
  }
  return (
    <div className='MainHeader'>
      <div className='sub_MainHeader_1'>
        <MenuIcon  onClick={OpenDrawer}/>
        <img id='img_Tag' src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="" />
        <Typography fontSize={'22px'}>Keep</Typography>
      </div>
      {/* <div className='sub_MainHeader_2'>
        <Search > 
                <SearchIconWrapper/>
          </Search>
        </div> */}

      <div className='headerSectionTwo'>
        {/* <div class='searchBox'>
                  <button type="submit" class='searchButton'>
                      <SearchIcon htmlColor="grey" />
                  </button>
                  <input type="text" class='searchField' placeholder="Search" />
              </div> */}

          <div class='searchBox'>
            <button type="submit" class='searchButton'>
              <SearchIcon/>
            </button>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ 'aria-label': 'Title' }}
            />
          </div>

      </div>
      <div className='sub_MainHeader_3'>
        <RefreshIcon />
        <ViewStreamIcon />
        {/* <SettingsIcon /> */}
        <SettingOptions/>
      </div>
      <div className='sub_MainHeader_4'>
        <AppsIcon fontSize='medium'></AppsIcon>
        <PersonIcon fontSize='large'></PersonIcon>
      </div>
    </div>
  )
}

export default Header