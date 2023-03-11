import React from 'react'
import Layout from '../components/Layout'
import NewPosts from '../components/NewPosts'
import Posts from '../components/Posts'

const Reel = () => {
  return (
    <Layout>
      <div className='wrapper-reel'>


        <NewPosts />
        <Posts />
        <Posts />
        <Posts />
      </div>
    </Layout>
  )
}

export default Reel