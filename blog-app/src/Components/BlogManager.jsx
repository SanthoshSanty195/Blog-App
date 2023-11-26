import React, { useState } from 'react';
import { Modal, Input } from 'antd';

const BlogManager = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
  ]);

  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [editPost, setEditPost] = useState({ id: null, title: '', content: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((item) => ({
      ...item,
      [name]: value,
    }));
  };

  const handleAddPost = () => {
    if (newPost.title && newPost.content) {
      setPosts((prevPosts) => [
        ...prevPosts,
        { id: prevPosts.length + 1, title: newPost.title, content: newPost.content },
      ]);
      setNewPost({ title: '', content: '' });
    }
  };

  const handleEditPost = () => {
    const updatedPosts = posts.map((post) =>
      post.id === editPost.id ? { ...post, title: editPost.title, content: editPost.content } : post
    );
    setPosts(updatedPosts);
    setEditPost({ id: null, title: '', content: '' });
    setIsModalOpen(false);
  };

  const handleDeletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  const handleEditClick = (post) => {
    setEditPost(post);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditPost({ id: null, title: '', content: '' });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Blog Posts</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter title"
          name="title"
          value={newPost.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Enter content"
          name="content"
          value={newPost.content}
          onChange={handleInputChange}
        />
      </div>
      <button className="btn btn-dark" style={{ marginBottom: '10px' }} onClick={handleAddPost}>
        Add Post
      </button>
      <hr />
      {posts.map((post) => (
        <div key={post.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
            <div>
              <button className="btn btn-warning me-2" onClick={() => handleEditClick(post)}>
                Edit
              </button>
              <button className="btn btn-danger" onClick={() => handleDeletePost(post.id)}>
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      <Modal
        title="Edit Post"
        visible={isModalOpen}
        onOk={handleEditPost}
        onCancel={handleCancel}
      >
        <Input
          placeholder="Enter title"
          name="title"
          value={editPost.title}
          onChange={(e) =>
            setEditPost((item) => ({ ...item, [e.target.name]: e.target.value }))
          }
        />
        <Input.TextArea
          placeholder="Enter content"
          name="content"
          value={editPost.content}
          onChange={(e) =>
            setEditPost((item) => ({ ...item, [e.target.name]: e.target.value }))
          }
        />
      </Modal>
    </div>
  );
};

export default BlogManager;
