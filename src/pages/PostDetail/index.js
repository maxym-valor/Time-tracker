import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import { Container } from 'components'
import { getItemById } from 'utils'
import './index.scss'

const Item = ({ title, value }) => (
  <div className='item'>
    <strong>{title}</strong>
    <div className='value'>{value}</div>
  </div>
)

const PostDetail = () => {
  const [post, setPost] = useState()
  const [user, setUser] = useState()
  const { posts, users } = useSelector(({ session }) => session)
  const { id } = useParams()

  useEffect(() => {
    getPost()
  }, [id])

  const getPost = useCallback(() => {
    const post = getItemById(posts, +id)
    const user = getItemById(users, +post?.userId)

    setPost(post)
    setUser(user)
  }, [posts, users])

  const getDataForUser = useMemo(() => {
    if (user) {
      const { name, username, phone, company } = user

      return [
        { title: 'Name: ', value: name },
        { title: 'Username: ', value: username },
        { title: 'Phone: ', value: phone },
        { title: 'Company name: ', value: company?.name },
      ]
    } else {
      return []
    }
  }, [user])

  const getDataForPost = useMemo(() => {
    if (user) {
      const { name, time, description, id } = post

      return [
        { title: 'Project name:', value: name },
        { title: 'Time:', value: moment(id).format('h:mm:ss') },
        { title: 'Description:', value: description },
        { title: 'Created:', value: moment(id).format('MMMM Do YYYY, h:mm:ss a') },
      ]
    } else {
      return []
    }
  }, [post])

  return (
    <Container>
      {getDataForUser.map(i => <Item key={i?.title} {...i} />)}

      <br />

      {getDataForPost.map(i => <Item key={i?.title} {...i} />)}
    </Container>
  )
}

export default PostDetail
