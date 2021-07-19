import React, { useContext } from 'react';
import ChecksContext from '../context/ChecksContext';
import Label from './Label';

function AfterRelease() {
  const { lists } = useContext(ChecksContext)

  return (
    <>
      {lists?.after?.map((item, index) => <Label key={item.id} item={item} index={index} type="After" />)}
    </>
  )
}

export default AfterRelease;