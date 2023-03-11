import React, { useEffect, useState } from 'react'
import chatBox from "../assets/images/chat-box-icon.svg"
import iconReactionUp from "../assets/images/icon-reaction-up.svg"
import iconReactionDown from "../assets/images/icon-reaction-down.svg"
import arrowRed from "../assets/images/arrow-red.svg"
import arrowGreen from "../assets/images/arrow-green.svg"
import { BASE_URL } from '../constants/baseUrl'
import { useNavigate, useParams } from 'react-router'
import { goToFeedComments } from '../routes/coordinator'

const Posts = ({ post }) => {
  const { content, likes, dislikes, creator, comments,id } = post

  const navigate = useNavigate()
  const params = useParams()

  const handleNumbers = (number) => {
    if(number/1000>0){
      return `${(number/1000).toFixed(1)}k`
    }
    if(number/1000000>0){
      return `${(number/1000).toFixed(1)}M`
    }
    return number
  }
  return (
    <div className='posts-wrapper' onClick={()=>goToFeedComments(navigate, id )}>
      <p className='sender'>Enviado por: {creator.name}</p>
      <p className='content'>{content}</p>
      <div className='reactions-wrapper'>
        <div className='reactions'>
          <img className="icon up" src={iconReactionUp} alt="up icon" />
          <span className='number-reaction'>{handleNumbers(likes)}</span>
          <img className="icon down" src={iconReactionDown} alt="Down icon" />
        </div>
        {params.id ||
          <div className='reactions'>
            <img className="icon chat" src={chatBox} alt="comments icon" />
            <span className='number-reaction'>{handleNumbers(comments.count)}</span>
          </div>
        }

      </div>
    </div>
  )
}

export default Posts