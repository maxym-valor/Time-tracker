import React, { memo } from 'react'
import { TimePicker, Input as InputAntd } from 'antd'
import './index.scss'

const { TextArea } = InputAntd

const Input = ({ type = 'input', ...props }) => {
  const obj = {
    input: <InputAntd {...props} className='inputAntd' />,
    textarea: <TextArea {...props} className='inputAntd' autoSize />,
    time: <TimePicker {...props} className='inputAntd' />,
  }

  return obj?.[type]
}

export default memo(Input)
