import api from 'api'
import { GET_USERS, CREATE_POST } from './constants'
import { showError } from 'utils'

const action = (type, payload) => ({ type, payload })

export const getUsers = () => dispatch => api.getUsers()
  .then(({ data }) => dispatch(action(GET_USERS, data)))
  .catch(showError)

export const createPost = data => dispatch => dispatch(action(CREATE_POST, data))
