import { useState } from 'react';

function List(props) {

  let [post, setPost] = useState([
    {
      title : '나주 전망대',
      date : '7월 8일',
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
    setUp( up + 1 )
  }

  function changeTitle() {
    var clonePost = {...post};
    clonePost[0].title = '나주 뷰 맛집';
    setPost( clonePost );
  }

  function changePostArray() {
    var clonePost = {...post};
    var clonePost00 = clonePost[0]
    clonePost[0] = clonePost[1];
    clonePost[1] = clonePost00;
    setPost( clonePost )
  }

  return (
    <>
      { props.isShow && <>

        <h3>list name : { props.name }</h3>

        <button onClick={ changeTitle }>1번글 제목 제목 바꾸기</button>
        <button onClick={ changePostArray }>1번글 2번글 순서 바꾸기</button>

        <Post title={ post[0].title } date= { post[0].date } onClick= { thumbsUp } up = { up } />
        <Post title={ post[1].title } date= { post[1].date } onClick= { thumbsUp } up = { up } />
        <Post title={ post[2].title } date= { post[2].date } onClick= { thumbsUp } up = { up } />


      </> }
    </>
  );
}

List.defaultProps = {
  name: '이름없음'
}


function Post(props) {

  return(
    <div className='list'>
      <h3> { props.title } <span onClick={ props.onClick }>👍</span> { props.up } </h3>
      <p> { props.date } 발행</p>
      <hr/>
    </div>
  )
}

export default List;