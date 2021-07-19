import React, { useContext } from 'react';
import ChecksContext from '../context/ChecksContext';
import Label from './Label';

function BeforeRelease() {
  const { lists } = useContext(ChecksContext)

  return (
    <>
      {lists?.before?.map((item, index) => <Label key={item.id} item={item} index={index} type="Before" />)}
    </>
  )
}

export default BeforeRelease;