// rm warning /* eslint-disable */
import React, { useState } from 'react';
import './App.css';
import seulki from './src_assets/seulki.JPG';

function App() {

  let [post, setPost] = useState([
    {
      title : '나주 전망대',
      date : '7월 8일'
    },
    {
      title : '전주 삼겹살 맛집',
      date : '11월 3일'
    },
    {
      title : '군산 장미 칼국수',
      date : '3월 1일'
    }
  ]);

  let [up , setUp] = useState(0)
  function thumbsUp() {
    setUp(up + 1)
  }

  return (
    <div className="App">

      <div className="black-nav">
        개발개발 블로그 blog BLOG Blog
      </div>

      <div>

        <img src={ seulki } className="image-size" alt="seulki" /><br/>
        <button onClick={ () => { var clonePost = {...post}; clonePost[0].title = '나주 뷰 맛집'; setPost(clonePost); } }>나주 전망대 제목 바꾸기</button>
        <div className='list'> 
          <h3> { post[0].title } <span onClick={ thumbsUp }>👍</span> { up } </h3>
          <p> { post[0].date } 발행</p>
          <hr/>
        </div>
        <div className='list'>
          <h3> { post[1].title } </h3>
          <p> { post[1].date } 발행</p>
          <hr/>
        </div>
        <div className='list'>
          <h3> { post[2].title } </h3>
          <p> { post[2].date } 발행</p>
          <hr/>
        </div>

      </div>
    </div>
  );
}

export default App;