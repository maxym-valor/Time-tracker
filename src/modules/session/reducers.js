import { GET_USERS, CREATE_POST } from './constants'

export const initialState = {
  users: [],
  posts: [],
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
  case GET_USERS:
    return { ...state, users: payload }
  case CREATE_POST:
    return {
      ...state,
      posts: [
        ...state.posts,
        { ...payload, id: Date.now() },
      ],
    }
  default:
    return state
  }
}
