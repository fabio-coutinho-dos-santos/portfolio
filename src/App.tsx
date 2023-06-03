import './App.css';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Menu, MenuItem, Sidebar, SubMenu, useProSidebar } from 'react-pro-sidebar';
import Login from './pages/Login/Login'
import { useEffect } from 'react';
import { useSetBodyColor } from './hooks/useSetBodyColor';
import Register from './pages/Register/Register';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';

function App() {
  const { collapseSidebar } = useProSidebar();
  const logged = false

  const {setBodyColor} = useSetBodyColor()

  useEffect(()=>{
    setBodyColor("#ffffff")
  },[])

  return (
    <>
    {logged ? (
      <div id="app">
        <BrowserRouter>
          <Sidebar className='sidebar'>
            <Menu>
              <MenuItem icon={<MenuOutlinedIcon />} onClick={() => {collapseSidebar();}}style={{ textAlign: "center" }}>
                {" "}
                {/* <h2>Admin</h2> */}
              </MenuItem>
              <Link to={'/home'} className='link'><MenuItem className='icon' icon={<HomeOutlinedIcon />}>Home</MenuItem></Link>
              <Link to={'/about'} className='link'><MenuItem icon={<PeopleOutlinedIcon />}>About</MenuItem></Link>
              <Link to={'/projects'} className='link'><MenuItem icon={<ContactsOutlinedIcon />}>Projects</MenuItem></Link>
              {/* <SubMenu icon={<HomeOutlinedIcon />} label="SubMenu">
                  <MenuItem icon={<PeopleOutlinedIcon />}>Item 1</MenuItem>
                  <MenuItem icon={<PeopleOutlinedIcon />}>Item 2</MenuItem>
                  <MenuItem icon={<PeopleOutlinedIcon />}>Item 3</MenuItem>
                </SubMenu>
              <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
              <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
              <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
              <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem> */}
            </Menu>
          </Sidebar>
          <Routes>
          <Route path='/home' Component={Home}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/projects' Component={Projects}></Route>
          
        </Routes>
        </BrowserRouter>
    </div>
    ) : (
      <BrowserRouter>
        <Routes>
            <Route path='/login' Component={Login}></Route>
            <Route path='/register' Component={Register}></Route>
        </Routes>
      </BrowserRouter>
    )}
    
    </>
  );
}
export default App;
