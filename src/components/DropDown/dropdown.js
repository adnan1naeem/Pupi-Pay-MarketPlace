import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Dropdown = ({pages}) => {
    const [anchorElUser, setAnchorElUser] = React.useState(true);
    React.useEffect(()=>{
      alert('dfbjbf')
    },[])
    return (
        <Box sx={{ flex:1, backgroundColor:'red' }}>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
              }}
              open={anchorElUser}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={()=> setAnchorElUser(!anchorElUser)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        
    //   <ul className="dropdown">
    //     {submenus.map((submenu, index) => (
    //       <li key={index} className="menu-items">
    //         <a href={submenu.url}>{submenu.title}</a>
    //       </li>
    //     ))}
    //   </ul>
    );
  };
  
  export default Dropdown;