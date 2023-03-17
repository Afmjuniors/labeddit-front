import React, { useEffect, useState } from 'react'
import chatBox from "../assets/images/chat-box-icon.svg"
import iconReactionUp from "../assets/images/icon-reaction-up.svg"
import iconReactionDown from "../assets/images/icon-reaction-down.svg"
import arrowRed from "../assets/images/arrow-red.svg"
import arrowGreen from "../assets/images/arrow-green.svg"
import { BASE_URL } from '../constants/baseUrl'
import { useNavigate, useParams } from 'react-router'
import { goToFeedComments } from '../routes/coordinator'
import axios from 'axios'

const Posts = ({ post,path }) => {
  const { content, likes,  creator, comments, id, userReaction } = post
  const [isLoading, setIsLoading] = useState(false)
  const [like, setLike] = useState(userReaction)
  const [numb, setNumb] = useState(likes)

  const navigate = useNavigate()
 


  const handleReaction = async (reaction) =>{
    try {
     

      setIsLoading(true)
      const headers ={ 
        authorization:localStorage.getItem('token')
      }      
      const response  = await axios.put(BASE_URL+path+id+"/reaction",{like:reaction===1?true:false}, {headers})
      if(like[0]===reaction){
        setLike([null])
        if(reaction){
          setNumb(numb-1)
        }
      }else{
        setLike([reaction])
        if(reaction){
          setNumb(numb+1)
        }else{
          setNumb(numb-1)
        }
      }
      
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }

  }

  const handleNumbers = (number) => {
    if(number<=0){
      return 0
    }
    if (number / 1000 > 1) {
      return `${(number / 1000).toFixed(1)}k`
    }
    if (number / 1000000 > 1) {
      return `${(number / 1000).toFixed(1)}M`
    }
    return number
  }
  return (
    <div className='posts-wrapper'>
      <p className='sender'>Enviado por: {creator.name}</p>
      <p className='content'  onClick={() => {
        goToFeedComments(navigate, id) 
        window.location.reload()
        }}>{content}</p>
      <div className='reactions-wrapper'>
        {
          isLoading ||
          <div className='reactions'>          
            <img className="icon up" onClick={()=>handleReaction(1)} src={like && like[0] === 1 ?arrowGreen:iconReactionUp} alt="up icon" />
          <span className='number-reaction'>{handleNumbers(numb)}</span>
            <img className="icon down" onClick={()=>handleReaction(0)} src={like && like[0] === 0 ?arrowRed:iconReactionDown} alt="Down icon" /> 
        </div>
        }        
        {path!=="/posts/"?<></>:
          <div className='reactions'>
            <img className="icon chat" src={chatBox} alt="comments icon" />
            <span className='number-reaction'>{handleNumbers(comments)}</span>
          </div>
        }

      </div>
    </div>
  )
}

export default Posts