import { CircularProgress } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { BASE_URL } from '../constants/baseUrl'

const NewPosts = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingBtn, setIsLoadingBtn] = useState(false)
  const [content, setContent] = useState('')
  const [headers, setHeaders] = useState({})
  const [path, setPath] = useState('/posts')
  const params = useParams()
  useEffect(() => {
    setHeaders({
      authorization: localStorage.getItem('token')
    })
    if (params.id) {
      setPath(`/comments/${params.id}`)
    } else {
      setPath('/posts')
    }


  }, [])

  const createNewPost = async (headers) => {
    try {
      setIsLoading(true)
      const response = await axios.post(`${BASE_URL}${path}`, { content }, { headers })
      console.log(response)
      setIsLoading(false)
      setIsLoadingBtn(false)
      window.location.reload()
    } catch (error) {
      setIsLoading(false)
      console.log(error)

    }
  }
  const handleClickPost = () => {
    setIsLoadingBtn(true)
    createNewPost(headers)
    setContent('')
  }


  return (
    <div className='new-post'>
      <textarea className='textarea-newpost'
        placeholder={path.includes("posts") ? "Escreva seu post..." : "Adicionar comentário"}
        value={content} onChange={(e) => setContent(e.target.value)} rows="6">

      </textarea>
      <button onClick={handleClickPost} className='btn btn-new-post'> {
        isLoadingBtn ?
          <CircularProgress color="inherit" /> : <>
            {path.includes("posts") ? <span>Postar</span> : <span>Responder</span>}
          </>
      }
      </button>
      <div className='line'></div>
    </div>
  )
}

export default NewPosts