import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Routes, Route, Router, useNavigate } from 'react-router-dom';
import UserOne from '../screens/userOne';
import UserTwo from '../screens/userTwo';




const drawerWidth = 240;

export default function Userss() {

    const [menuList, setMenuList] = React.useState([
        {
            name : "Send Question",
            route : "QuestionPost",
        },
        {
            name : "Question/Answers",
            route : "questionss",
        }
    ]);
    let navigate = useNavigate();
    let changeScreen = (route) => {
        navigate(`${route}`)

    }



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            USER PORTAL
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {menuList.map((x, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() =>changeScreen(x.route)}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={x.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        
       <Routes>
        <Route path='/QuestionPost' element={<UserOne/>}/>
        <Route path='/questionss' element={<UserTwo/>}/>
        {/* <route path='/postform' element={<PostForm/>}/> */}
       </Routes>
        
      </Box>
    </Box>
  );
}