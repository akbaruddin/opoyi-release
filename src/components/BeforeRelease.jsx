import React, { useContext } from 'react';
import ChecksContext from '../context/checksContext';
import Label from './Label';
import releaseList from '../data/beforeRelease.json';

function BeforeRelease() {
  const { lists } = useContext(ChecksContext)

  return (
    <>
      {lists?.before?.map((item, index) => <Label key={item.id} item={item} index={index} type="Before" />)}
    </>
  )
}

export default BeforeRelease;