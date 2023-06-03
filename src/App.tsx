import './App.css';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Menu, MenuItem, Sidebar, SubMenu, useProSidebar } from 'react-pro-sidebar';
import Login
 from './pages/Login/Login';
import { useEffect } from 'react';
import { useSetBodyColor } from './hooks/useSetBodyColor';
import Register from './pages/Register/Register';
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
      <Sidebar className='sidebar'>
        <Menu>
          <MenuItem icon={<MenuOutlinedIcon />} onClick={() => {collapseSidebar();}}style={{ textAlign: "center" }}>
            {" "}
            <h2>Admin</h2>
          </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
          <SubMenu icon={<HomeOutlinedIcon />} label="SubMenu">
              <MenuItem icon={<PeopleOutlinedIcon />}>Item 1</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon />}>Item 2</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon />}>Item 3</MenuItem>
            </SubMenu>
          <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <div className="container">  
          <h1>
            React
        </h1>
      </div>
        
      </main>
    </div>
    ) : (
      <Register/>
    )}
    
    </>
  );
}
export default App;
