import React from 'react'
import './input.css'
const Input = () => {
    return (
        <div className='input'>
            <div className='inputbox'>
                <div className='inputfield'>
                    <input type="text" placeholder='type something...' />
                    <div className='emojibutton'>
                        <span class="material-symbols-outlined">
                            mood
                        </span>
                    </div>
                </div>
                <div className='send'><span class="material-symbols-outlined">
                    send
                </span></div>
            </div>
        </div>
    )
}

export default Input