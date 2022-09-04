import React, { useState } from 'react'
import './Message.css'

export const Message = () => {
    const [time, setTime] = useState("")
    const [subject, setSubject] = useState("")
  return (
    <div className='mfull'>
        <div className='mboxx'>

        <p>i would like to set up a 1 hr meeeting</p>
        <p>Click on the meeting start time that works for you</p>
        </div>
        <div className='mboxx2'>
            <p>Time :  </p>
            <input className='nme' type="text" name='time' id='time' placeholder='Time'   />


            <p>Subject :  </p>
            <input className='nme' type="text" name='subject' id='subject' placeholder='Subject'   />
        </div>
    </div>
  )
}
