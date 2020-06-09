import React, { Component } from 'react';

import Title from 'antd/lib/typography/Title';
import { Card } from 'antd';
import { NavLink } from 'react-router-dom';

class PostList extends Component {
  render() {
    return (
      <div>
        <Title level={2}>View Posts</Title>
        <Card title="Post title 1" style={{ width: '100%' }}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Consequatur officiis hic id at voluptatem modi soluta quas, enim a. 
            Maiores aut quis nobis error ullam temporibus voluptas praesentium amet accusantium.</p>
          <NavLink to='/posts/1'>View More...</NavLink>
        </Card>
      </div>
    )
  }
}

export default PostList;
