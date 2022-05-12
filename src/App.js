import { useState, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import List from './List';
import Wrapper from './Wrapper';
import InputSample from './InputSample';
import CreatePost from './CeatePost';
import RouterTest from './RouterTest';

import './App.css';
import seulki from './src_assets/seulki.JPG';

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

      <BrowserRouter>

        <RouterTest />
        <Routes>
          <Route path="/test" element={ <Wrapper /> }></Route>
        </Routes>

      
      </BrowserRouter>

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
      유슬기의 포트폴리오
    </div>
  )
}

function Me() {
  return(
    <div className='image-size'>

      <div style={ { float: 'left', width: '50%' } }>
        <img src={ seulki } className="image-size" alt="seulki" />
      </div>

      <div style={ { float: 'right', width: '50%' } }>
        개발자 유슬기입니다 <hr/>
        호기심이 많고 배우는 것을 즐기는 유슬기이다.
        허니버터칩을 좋아하고 맑은 날, 비 오는 날을 좋아한다.
        여행을 좋아하고 새로운 것을 발견하고 본인의 스타일로 체화하는 것을 좋아한다/
        <hr/>
        누구나 쓸 수 있는 방명록 <br/>
        유슬기: 안녀하세요<br/>
        김철수: 반갑습니다<br/>
        <input/><button>send</button>
        <hr/>
        회원만 보낼 수 있는 쪽지
        <button>쪽지보내기</button>

      </div>

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