import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'components'
import Post from './Post'
import './index.scss'

const Posts = () => {
  const { posts } = useSelector(({ session }) => session)

  const list = useMemo(() => posts.map(({ id, name }) => <Post name={name} id={id} key={id} />, [posts]))

  return (
    <Container className='wrapperPosts'>
      {posts.length ? list : <h1>No Data</h1>}
    </Container>
  )
}

export default Posts
