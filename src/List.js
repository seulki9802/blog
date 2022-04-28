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

  return (
    <>
      { props.isShow && <>

        <h3>list name : { props.name }</h3>

        {/* <button onClick={ changeTitle }>1번글 제목 제목 바꾸기</button>
        <button onClick={ changePostArray }>1번글 2번글 순서 바꾸기</button> */}

        <ChangePostButtons postState={ [post, setPost] } />

        <Post post={ post[0] } />
        <Post post={ post[1] } />
        <Post post={ post[2] } />


      </> }
    </>
  );
}

List.defaultProps = {
  name: '이름없음'
}


function Post({ post }) {

  let [number, setNumber] = useState(0)

  function numberUp(){
    setNumber( number + 1 )
  }

  return(
    <div className='list'>
      <h3> { post.title } <span onClick={ numberUp }>👍</span>{ number }</h3>
      <p> { post.date } 발행</p>
      <hr/>
    </div>
  )
}

function ChangePostButtons({ postState }) {
  let [post, setPost] = postState

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

  return(
    <>
      <button onClick={ changeTitle }>1번글 제목 제목 바꾸기</button>
      <button onClick={ changePostArray }>1번글 2번글 순서 바꾸기</button>
    </>
  )
}

export default List;

// {/* <span onClick={ { post.onClick } }>👍</span> { { post.up } } */}