import React from 'react'

const NewPosts = () => {
  return (
    <div className='new-post'>
        <textarea placeholder='Escreva seu post...' rows="8">

        </textarea>
        <button className='btn btn-new-post'> Postar</button>
       <div className='line'></div>
    </div>
  )
}

export default NewPosts