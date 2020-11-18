import React from 'react'
import { useHistory } from 'react-router-dom'
import moment from 'moment'

const Post = ({ name, id }) => {
  const { push } = useHistory()

  return (
    <div className='post' onClick={() => push(`/post/${id}`)}>
      <div>{name}</div>
      <div>{moment(id).fromNow()}</div>
    </div>
  )
}

export default Post
