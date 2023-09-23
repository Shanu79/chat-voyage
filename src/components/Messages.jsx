import React from 'react'
import Message from './Message';
import './messages.css'

const Messages = () => {
  return (
    <div className='messages'>
        <div className="timestamp">
          <span>Fri, 21:00</span>
        </div>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
    </div>
  )
}

export default Messages