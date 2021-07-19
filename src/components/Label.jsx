
import React, { useContext, useState } from 'react'
import ChecksContext from '../context/ChecksContext';
import { Checkbox } from 'antd';
import styles from './Label.module.css';
function Label({ item, index, type }) {
  const { name, check } = item;
  const { storeValue } = useContext(ChecksContext);
  const [checkInput, setCheckInput] = useState(check);

  const onChange = (e) => {
    setCheckInput(e.target.checked);
    storeValue({ item: { ...item, check: e.target.checked }, index, type });
  }

  return (
    <p style={{ marginBottom: '10px' }}>
      <Checkbox checked={checkInput} onChange={onChange}>{ name }</Checkbox>
    </p>
  )
}

export default Label;