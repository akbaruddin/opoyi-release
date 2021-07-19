import React, { useContext, useEffect } from 'react'
import { Layout, Typography, Row, Col, Divider, Button } from 'antd';

import ChecksContext, { CheckProvider } from './context/ChecksContext'
import BeforeRelease from './components/BeforeRelease'
import AfterRelease from './components/AfterRelease'
import beforeRelease from './data/beforeRelease.json';
import afterRelease from './data/afterRelease.json';
import styles from './App.module.css'

const { Footer, Content } = Layout;
const { Title } = Typography;

function Uniq(data) {
  const arrayOfMap = data.map(item => [ item.id, item]);
  const checkIds = new Map(arrayOfMap);
  return [...checkIds.values()];
}

function Table() {
  const { setLists } = useContext(ChecksContext);

  useEffect(() => {

    const afterData = Uniq(
      [...afterRelease, ...JSON.parse(localStorage.getItem('listsAfter') || '[]')]
    );
    const beforeData = Uniq(
      [...beforeRelease, ...JSON.parse(localStorage.getItem('listsBefore') || '[]')]
    );

    setLists({
      after: afterData,
      before: beforeData
    })
    localStorage.setItem('listsAfter', JSON.stringify(afterData))
    localStorage.setItem('listsBefore', JSON.stringify(beforeData))
  }, [])

  return (
    <Row>
      <Col span={12}>
        <Divider orientation="left">Before Release</Divider>
        <BeforeRelease />
      </Col>
      <Col span={12}>
        <Divider orientation="left">After Release</Divider>
        <AfterRelease />
      </Col>
    </Row>
  )
}

function resetList(type) {
  const lists = JSON.parse(localStorage.getItem(type) || '[]');
  const uncheckList = lists.map(item => ({ ...item, check: false }));
  localStorage.setItem(type, JSON.stringify(uncheckList));
}

function App() {
  const clearAll = () => {
    resetList('listsAfter');
    resetList('listsBefore');
    window.location.reload();
  }

  return (
    <CheckProvider>
      <Layout>
        <Content style={{ padding: '0 50px' }}>
          <Title >Release Notes</Title>
          <Divider />
          <Table />
        </Content>
        <Footer><Button onClick={clearAll}>Clear All</Button></Footer>
      </Layout>
    </CheckProvider>
  )
}

export default App
