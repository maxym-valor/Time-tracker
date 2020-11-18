import { notification } from 'antd'

export const showError = error => notification.error({ message: error?.response?.data?.message })

export const getItemById = (data, id) => data?.find(i => i.id === id) || {}
