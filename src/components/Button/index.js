import React, { memo } from 'react'
import { Button as ButtonAntd } from 'antd'
import c from 'classnames'
import './index.scss'

const Button = ({ title, className, ...props }) => (
  <ButtonAntd className={c('buttonAntd', className)} {...props}>
    {title}
  </ButtonAntd>
)

export default memo(Button)
