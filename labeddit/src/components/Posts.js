import React from 'react'
import chatBox from "../assets/images/chat-box.svg"
import iconReaction from "../assets/images/icon-reaction-up.svg"

const Posts = () => {
  return (
    <div className='Posts-wrapper'>
      <p className='sender'>Enviado por: labenu83</p>
      <p className='content'>Porque a maioria dos desenvolvedores usam Linux? ou as empresas de tecnologia usam Linux ?</p>
      <div className='reactions-wrapper'>
        <div className='reacttions'>
          <img className="icon up" src={iconReaction} alt="up icon" />
          <span>1.2k</span>
          <img className="icon down" src={iconReaction} alt="Down icon" />
        </div>
        <div className='reacttions'>
        <img className="icon chat" src={chatBox} alt="comments icon" />
        <span>132</span>
        </div>

      </div>
    </div>
  )
}

export default Posts