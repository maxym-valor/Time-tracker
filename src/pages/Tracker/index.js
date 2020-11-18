import React, { useEffect, useCallback, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, createPost } from 'modules/session/actions'
import { Form } from 'antd'
import { Container, Button, Input, Select } from 'components'
import './index.scss'

const { Item, useForm } = Form

const rules = [{ required: true }]

const Tracker = () => {
  const [form] = useForm()
  const { users } = useSelector(({ session }) => session)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const onFinish = useCallback(values => {
    dispatch(createPost(values))
    onReset()
  }, [])

  const onReset = useCallback(() => form.resetFields(), [form])

  return (
    <Container className='wrapperTracker'>
      <Form form={form} onFinish={onFinish} layout='vertical'>
        <div className='rows'>
          <Item label='User' name='userId' rules={rules}>
            <Select data={users} placeholder='Select a user' />
          </Item>

          <Item label='Time' name='time' rules={rules}>
            <Input type='time' placeholder='Name' />
          </Item>
        </div>

        <Item label='Name' name='name' rules={rules}>
          <Input placeholder='Name' />
        </Item>

        <Item label='Description' name='description'>
          <Input type='textarea' placeholder='Description...' />
        </Item>

        <div className='buttons'>
          <Button htmlType='submit' title='Submit' />
          <Button onClick={onReset} className='button' title='Reset' />
        </div>
      </Form>
    </Container>
  )
}

export default memo(Tracker)
