import React from 'react';
import Messages from './Messages'
import './chat.css';
import Input from './Input';

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatheader">
        <span className='chatusername'>
          tripshivi
        </span>
        <div className="chatheadicons">
          <span class="material-symbols-outlined">
            video_call
          </span>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat