import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../constants/baseUrl'

const NewPosts = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [content, setContent] = useState('')
  const [headers, setHeaders]= useState({})
  useEffect(()=>{
    setHeaders({
      authorization:localStorage.getItem('token')
    })
  },[])

  const createNewPost = async (headers) =>{
    try {
      setIsLoading(true)
      const response = await axios.post(`${BASE_URL}/posts`,{content},{headers})
      console.log(response)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }
  const handleClickPost = () =>{
    console.log(content)
    createNewPost(headers)
    setContent('')
    window.location.reload()
  }


  return (
    <div className='new-post'>
        <textarea placeholder='Escreva seu post...' value={content} onChange={(e)=>setContent(e.target.value)} rows="8">

        </textarea>
        <button onClick={handleClickPost} className='btn btn-new-post'> Postar</button>
       <div className='line'></div>
    </div>
  )
}

export default NewPosts