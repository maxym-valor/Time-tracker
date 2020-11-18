import React, { memo } from 'react'
import { Select as SelectAntd } from 'antd'
import './index.scss'

const { Option } = SelectAntd

const Select = ({ data = [], ...props }) => (
  <SelectAntd {...props} className='select'>
    {data.map(({ id, name }) => <Option key={id} value={id}>{name}</Option>)}
  </SelectAntd>
)

export default memo(Select)
