import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { color, flexbox } from '@mui/system';
import { changeColorNotes } from '../../services/DataService';


export default function ColorPopper(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [open, setOpen]= React.useState(false)

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const colors = ["#2ECC71", "#AF7AC5", "#F1948A", "#A3E4D7", "#F5B7B1", "#F5B041", "#DC7633", "#F1C40F", "#AAB7B8", "#F1948A", "#2ECC71", "#F5B041"]

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  const pickColor = (colorInput) => {
    // console.log(colorInput)
    // props.listenToColorPopper(colorInput)
    if (props.action === 'create') {

      console.log(colorInput)
      props.listenToColorPopper(colorInput)
    } else if (props.action === 'update') {
      console.log('Update color')

      let dataObject = { noteIdList: [props.id], color: colorInput }

      changeColorNotes(dataObject).then((response) => console.log(response)).catch((err) => console.log(err))
      props.listenToColorUpdate()

    }
  }

  return (
    <div>
      {/* <button aria-describedby={id} type="button" onClick={handleClick}> */}
      <ColorLensIcon onClick={handleClick} />
      {/* </button> */}
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display: 'flex' }}>
          {
            colors.map((color) => (
              <div style={{ backgroundColor: color, height: 30, width: 30, borderRadius: 100, marginLeft: 5 }} onClick={() => pickColor(color)} >

              </div>
            ))
          }
        </Box>
      </Popper>
    </div>
  );
}


