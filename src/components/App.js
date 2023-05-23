import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { CreatePost } from './CreatePost';
import { Home } from './Home';
import { PostDetail } from './PostDetail';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/past/:postId" Component={PostDetail} />
        <Route exact path="/create-post" Component={CreatePost} />
      </Routes>
    </div>
  );
}

export default App;
