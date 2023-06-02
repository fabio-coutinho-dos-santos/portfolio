import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Menu, MenuItem, Sidebar, SubMenu, useProSidebar } from 'react-pro-sidebar';

function App() {
  const { collapseSidebar } = useProSidebar();

  return (
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
        <h1>
          React-Pro-Sidebar
        </h1>
      </main>
    </div>
  );
}
export default App;
