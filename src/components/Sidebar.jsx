import React from 'react';
import Navbar from './Navbar';
import StartChat from './StartChat';
import './sidebar.css'
import Chats from './Chats';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Navbar/>
        <StartChat/>
        <Chats/>
    </div>
  )
}

export default Sidebar