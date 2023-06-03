import './App.css';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Menu, MenuItem, Sidebar, SubMenu, useProSidebar } from 'react-pro-sidebar';
import Login from './pages/Login/Login'
import { useEffect, useState } from 'react';
import { useSetBodyColor } from './hooks/useSetBodyColor';
import Register from './pages/Register/Register';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import { useLocalStorage } from './hooks/useLocalStorage';
import { StorageKeys } from './helpers/StorageKeys';

function App() {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
  const {setBodyColor} = useSetBodyColor()
  const {getItem, setItem} = useLocalStorage()
  const [logged, setLogged] = useState(false)
  const [avatarH, setAvatarH] = useState('200px')

  useEffect(()=>{
    toggle()
    minimizeAvatar();
    setBodyColor("#ffffff")
    document.documentElement.style.setProperty('--avatarH', avatarH)
    const token: any = getItem(StorageKeys.ACCESS_TOKEN);
    console.log(token)
    token ? setLogged(true) : setLogged(false)
    console.log(logged)
  },[])

  const toggle = () => {
    toggleSidebar();
    if (toggled) {
      console.log(toggled)
      collapseSidebar();
      maximizeAvatar();
    } else {
      console.log(toggled)
      collapseSidebar();
      minimizeAvatar();
    }
  };

  const exit = () =>{
    setItem(StorageKeys.ACCESS_TOKEN, '')
    window.location.reload()
  }

  const minimizeAvatar = () =>{
    console.log('min')
    setAvatarH('60px')
    document.documentElement.style.setProperty('--avatarH', avatarH)
  }

  const maximizeAvatar = () =>{
    console.log('max')
    setAvatarH('200px')
    document.documentElement.style.setProperty('--avatarH', avatarH)
  }



  // const showSidebar = () => {
  //   setDisplayType('block')
  //   collapseSidebar();
  // }

  // const logged = false

  return (
    <>
    {logged ? (
      <div id="app">
        <BrowserRouter>
          <Sidebar className='sidebar' backgroundColor='' breakPoint="sm">
            <Menu>
              <MenuItem className='collapse-btn' icon={<MenuOutlinedIcon/>} onClick={() => {toggle();}}></MenuItem>
              <div className='avatar'>
              </div>
              <Link to={'/home'} className='link'><MenuItem onClick={()=>{ broken && toggle()}} className='icon' icon={<HomeOutlinedIcon />}>Home</MenuItem></Link>
              <Link to={'/about'} className='link'><MenuItem onClick={()=>{ broken && toggle()}} icon={<PeopleOutlinedIcon />}>About</MenuItem></Link>
              <Link to={'/projects'} className='link'><MenuItem onClick={()=>{ broken && toggle()}} icon={<ContactsOutlinedIcon />}>Projects</MenuItem></Link>
              <Link to={'/login'} className='link'><MenuItem onClick={exit} icon={<ExitToAppIcon />}>Exit</MenuItem></Link>
            </Menu>
          </Sidebar>
          <div className="navbar">
            {broken &&
                <div className="icon-sidebar" onClick={()=>{toggle()}}>
                 <MenuOutlinedIcon className='position-absolute top-0 start-0'/>
              </div>
            }
            <div>
              <ExitToAppIcon onClick={exit} className='position-absolute top-0 end-0'/>
            </div>
          </div>
          <Routes>
          <Route path='/home' Component={Home}></Route>
          <Route path='/login' Component={Home}></Route>
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
