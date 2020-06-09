import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { Typography } from 'antd';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { createPost } from '../../services/postService';
import { AppActions } from '../../actions/posts';
import { Post } from '../../types/post';
import { AppState } from '../../store/configureStore';

const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface AddPostPageProps {
  title?: string;
  body?: string;
}

interface AddPostPageState {}

type Props = AddPostPageProps & LinkStateProps & LinkDispatchProps;

class PostForm extends Component <Props, AddPostPageProps>{

  onFinish = (values: any) =>{
    console.log('Success:', values);

    // send the values... 
    console.log(this.props);
    //this.props.dispatch(createPost( values ));
    this.props.onCreatePost(values);
  };

  onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  render() {
    return (
      <div>
        {/* H2 tag equivalent */}
        <Title level={2}>Add Post</Title> 
        <Form
            {...layout}
            name="basic"
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="Post Title"
              name="title"
              rules={[{ required: true, message: 'Please input your postTitle!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Post Body"
              name="body"
              rules={[{ required: true, message: 'Please input your postContent!' }]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
      </div>
    )
  }
}


interface LinkStateProps {
  posts: Post[];
}
interface LinkDispatchProps {
  onCreatePost: (post: Post) => any;
}

const mapStateToProps = (
  state: AppState,
  ownProps: AddPostPageProps
): LinkStateProps => ({
  posts: state.posts
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: AddPostPageProps
): LinkDispatchProps => ({
  onCreatePost: bindActionCreators(createPost, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps )(PostForm); 
