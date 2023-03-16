import { Skeleton } from '@mui/material'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Layout from '../components/Layout'
import NewPosts from '../components/NewPosts'
import Posts from '../components/Posts'
import { BASE_URL } from '../constants/baseUrl'
import { GlobalContext } from '../context/GlobalContext'
import { goToHomePage } from '../routes/coordinator'

const Feed = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {setIsLogged} = useContext(GlobalContext)
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])
  const [postParams, setPostParams] = useState([])
  const [path, setPath] = useState('/posts/')


  const params = useParams()

  useEffect(()=>{
    const headers = {
      authorization:localStorage.getItem('token')
    }
    if(params.id!==undefined){
      getPostById(headers)
      getCommentsByPostId(headers)
    }else{

      getAllPosts(headers)
    }
  },[])
  useEffect(()=>{
    if(params.id){
      setPath(`/comments/`)
    }else{
      setPath('/posts/')
    }
  },[])


  const getAllPosts =async (headers)=>{
    try {
      setIsLoading(true)
      const response = await axios.get(`${BASE_URL}/posts`,{headers})
      setPosts(response.data)
      setIsLogged(true)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
      if(error.response.data==="Usuario não logado"){
        setIsLogged(false)
        goToHomePage(navigate)
      }
    }
  }
  const getPostById = async (headers)=>{
    try {
      setIsLoading(true)
      const response = await axios.get(`${BASE_URL}/posts?postId=${params.id}`,{headers})
      setPostParams(response.data)
      setIsLogged(true)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
      if(error.response.data==="Usuario não logado"){
        setIsLogged(false)
        goToHomePage(navigate)
      }
    }
  }
  const getCommentsByPostId =  async (headers)=>{
    try {
      setIsLoading(true)
      const response = await axios.get(`${BASE_URL}/comments/${params.id}`,{headers})
      setPosts(response.data)
      setIsLogged(true)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
      if(error.response.data==="Usuario não logado"){
        setIsLogged(false)
        goToHomePage(navigate)
      }
    }
  }

  return (
    <Layout>
      <div className='wrapper-feed'>
        {postParams.length>0? 
        <Posts post={postParams[0]} path={"/posts/"}/>
        :<></>
        }
        <NewPosts />
        {isLoading?
        <div className='skeleton-wrapper'>
        <Skeleton variant="rounded" width={"100%"} height={100}/>
        <Skeleton variant="rounded" animation="wave" width={"100%"} height={100}/>
        <Skeleton variant="rounded" width={"100%"} height={100}/>
        </div>
        :
        posts
        .sort((a,b)=>b.comments-a.comments)
        .sort((a,b)=>b.likes-a.likes)
        .map((post)=><Posts post={post} key={post.id} path={path}/>)
        }
      </div>
    </Layout>
  )
}

export default Feed