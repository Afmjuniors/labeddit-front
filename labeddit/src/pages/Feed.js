import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import NewPosts from '../components/NewPosts'
import Posts from '../components/Posts'
import { BASE_URL } from '../constants/baseUrl'

const Feed = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    const headers = {
      authorization:localStorage.getItem('token')
    }
    getAllPosts(headers)
  },[])

  const getAllPosts =async (headers)=>{
    try {
      setIsLoading(true)
      const response = await axios.get(`${BASE_URL}/posts`,{headers})
      setPosts(response.data)
      console.log(response)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  return (
    <Layout>
      <div className='wrapper-feed'>
        <NewPosts />
        {isLoading?
        <>
        </>:
        posts.map((post)=><Posts post={post} key={post.id}/>)
        }
      </div>
    </Layout>
  )
}

export default Feed