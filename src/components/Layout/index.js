import React, { memo } from 'react'
import { Header } from 'components'
import './index.scss'

const Layout = ({ children }) => (
  <div className='layout'>
    <div className='wrapperHeader'>
      <Header />
    </div>

    {children}
  </div>
)

export default memo(Layout)
