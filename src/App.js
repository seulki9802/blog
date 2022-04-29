import { useState, useRef } from 'react';
import List from './List';
import Wrapper from './Wrapper';
import InputSample from './InputSample';
import './App.css';
import seulki from './src_assets/seulki.JPG';
import CreatePost from './CeatePost';

function App() {

  let [posts, setPosts] = useState([
    {
      id : 0,
      title : '나주 전망대',
      date : '7월 8일',
      active : true
    },
    {
      id : 1,
      title : '전주 삼겹살 맛집',
      date : '11월 3일',
      active : false
    },
    {
      id : 2,
      title : '군산 장미 칼국수',
      date : '3월 1일',
      active : false
    }
  ]);

  let nextId = useRef(3);

  let [inputs, setInputs] = useState({
    title: '',
    date: ''
  })

  let onChange = e => {
    let { className, value } = e.target;
    setInputs({
      ...inputs,
      [className]: value //title(or date) : 입력 값!
    })
  }

  let onCreate = () => {

    var post = {
      id : nextId.current,
      title : inputs.title,
      date : inputs.date,
      active : false
    }

    // setPosts([...posts, post]);
    setPosts(posts.concat(post));
    //concat은 기존 배열에 추가해주는 함수

    setInputs({
      title: '',
      date: ''
    });
    nextId.current += 1;
  }

  let onRemove = id => {
    setPosts(posts.filter(post => post.id !== id));
  }

  let onToggle = id => {
    // setPosts(
    //   posts.map(post =>
    //     post.id === id ? { ...post, active: !post.active } : post
    //   )
    // )
    setPosts(
      posts.map(post =>
        post.id === id ? { ...post, active: true } : {...post, active: false}
      )
    )
  }

  return (
    <div className="App">

      <Navbar />
      <Me />

      <Wrapper>
        <InputSample />
      </Wrapper>

      <CreatePost
        title = { inputs.title }
        date = { inputs.date }
        onChange = { onChange }
        onCreate = { onCreate }
      />

      <Wrapper>
        <List postsState={ [posts, setPosts] } onRemove={ onRemove }  onToggle={ onToggle } />
      </Wrapper>

      <Modal />

    </div>
  );
}

function Navbar() {
  return(
    <div className="black-nav">
      개발개발 블로그 blog BLOG Blog
    </div>
  )
}

function Me() {
  return(
    <div>
      <img src={ seulki } className="image-size" alt="seulki" />
    </div>
  )
}

function Modal() {
  return(
    <div className='modal'>
      <h2>title</h2>
      <p>date</p>
      <p>detail</p>
    </div>
  )
}

export default App;