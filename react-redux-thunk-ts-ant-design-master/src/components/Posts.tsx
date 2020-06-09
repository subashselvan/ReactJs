import React from 'react'
import { Row, Col, PageHeader } from 'antd';
import PostForm from '../containers/posts/PostForm';
import PostList from '../containers/posts/PostList';

const Posts = () => {

  return (
    <>
      <PageHeader
        className="site-page-header"
        title="All Posts"
        subTitle="Add & View Your Posts"
      />
      <Row gutter={16}>
        <Col className="gutter-row" span={9}>
          <PostForm />
        </Col>

        <Col className="gutter-row" span={15}>
          <PostList></PostList>
        </Col>
      </Row>
    </>
  )
}

export default Posts;
