import React, { memo } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import c from 'classnames'
import './index.scss'

const tabs = [
  { title: 'Tracker', path: '/' },
  { title: 'Posts', path: '/posts' },
]

const Header = () => {
  const { pathname } = useLocation()
  const { push } = useHistory()

  const goTo = path => () => push(path)

  return (
    <ul className='tabs'>
      {tabs.map(({ title, path }) => (
        <li
          key={title}
          className={c('tab', { activeTab: pathname === path })}
          onClick={goTo(path)}
        >
          {title}
        </li>
      ))}
    </ul>
  )
}

export default memo(Header)
