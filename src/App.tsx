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
import { FaArrowUp } from 'react-icons/fa'
import HomeNew from './pages/HomeNew/HomeNew';

function App() {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
  const {setBodyColor} = useSetBodyColor()
  const {getItem, setItem} = useLocalStorage()
  const [logged, setLogged] = useState(false)
  const [avatarH, setAvatarH] = useState('200px')
  const [pageTitle, setPageTitle] = useState('Home')

  useEffect(()=>{
    minimizeAvatar();
    // setBodyColor("whitesmoke")
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
    setLogged(false);
    window.location.href = '/login'
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

  return (
      <>
        <BrowserRouter>
        {!logged ? (
          <>
            <Routes>
              <Route path='/login' Component={Login}></Route>
              <Route path='/home' Component={Login}></Route>
              <Route path='/about' Component={Login}></Route>
              <Route path='/projects' Component={Login}></Route>
              <Route path='/' Component={Login}></Route>
            </Routes>
          </>) : (
          <div id='app'>
              <Sidebar className='sidebar position-fixed' defaultCollapsed width='200px' backgroundColor='' breakPoint="sm">
                <Menu>
                  <MenuItem className='collapse-btn' icon={<MenuOutlinedIcon/>} onClick={() => {toggle();}}>
                  {" "}
                  <h2>{pageTitle}</h2>
                  </MenuItem>
                  {/* <div className='avatar d-none d-lg-block'/> */}
                  <Link to={'/home'} className='link'><MenuItem  onClick={()=>{ broken && toggle(); setPageTitle('Home')}} className='icon' icon={<HomeOutlinedIcon />}>Home</MenuItem></Link>
                  <Link to={'/about'} className='link'><MenuItem onClick={()=>{ broken && toggle(); setPageTitle('About')}} icon={<PeopleOutlinedIcon />}>About</MenuItem></Link>
                  <Link to={'/projects'} className='link'><MenuItem onClick={()=>{ broken && toggle(); setPageTitle('Projects')}} icon={<ContactsOutlinedIcon />}>Projects</MenuItem></Link>
                  <Link to={'/login'} className='link'><MenuItem onClick={exit} icon={<ExitToAppIcon />}>Exit</MenuItem></Link>
                </Menu>
              </Sidebar>
              <div className="navbar d-lg-none">
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
              <Route path='/' Component={HomeNew}></Route>
              <Route path='/home' Component={HomeNew}></Route>
              <Route path='/login' Component={HomeNew}></Route>
              <Route path='/about' Component={About}></Route>
              <Route path='/projects' Component={Projects}></Route>
            </Routes>
              <div className='btn-end position-fixed bottom-0 end-0' onClick={()=>{window.scrollTo(0, 0)}}><FaArrowUp id="icon-arrow"/></div>
          </div>          
        )}
        </BrowserRouter>
    </>
  );
}
export default App;
