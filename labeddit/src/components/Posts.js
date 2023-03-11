import React from 'react'
import chatBox from "../assets/images/chat-box-icon.svg"
import iconReactionUp from "../assets/images/icon-reaction-up.svg"
import iconReactionDown from "../assets/images/icon-reaction-down.svg"
import arrowRed from "../assets/images/arrow-red.svg"
import arrowGreen from "../assets/images/arrow-green.svg"

const Posts = () => {
  return (
    <div className='posts-wrapper'>
      <p className='sender'>Enviado por: labenu83</p>
      <p className='content'>Porque a maioria dos desenvolvedores usam Linux? ou as empresas de tecnologia usam Linux ?</p>
      <div className='reactions-wrapper'>
        <div className='reactions'>
          <img className="icon up" src={iconReactionUp} alt="up icon" />
          <span className='number-reaction'>1.2k</span>
          <img className="icon down" src={iconReactionDown} alt="Down icon" />
        </div>
        <div className='reactions'>
          <img className="icon chat" src={chatBox} alt="comments icon" />
          <span className='number-reaction'>132</span>
        </div>

      </div>
    </div>
  )
}

export default Posts