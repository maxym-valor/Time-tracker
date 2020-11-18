import React, { memo } from 'react'
import c from 'classnames'
import './index.scss'

const Container = ({ children, className }) => (
  <div className={c('container', className)}>
    {children}
  </div>
)

export default memo(Container)
