import { useState, useRef } from 'react';

function List(props) {

  let [posts, setPost] = useState([
    {
      title : '나주 전망대',
      date : '7월 8일',
      id : 0
    },
    {
      title : '전주 삼겹살 맛집',
      date : '11월 3일',
      id : 1
    },
    {
      title : '군산 장미 칼국수',
      date : '3월 1일',
      id : 2
    }
  ]);

  return (
    <>
      { props.isShow && <>

        <h3>list name : { props.name }</h3>
        
        <ChangePostsButtons postsState={ [posts, setPost] } />
        <br/>
        <InputPostTitle postsState={ [posts, setPost] } />

        { posts.map((post) => {
          return <Post post={ post } key={ post.id.toString() }/>
        }) }

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

function ChangePostsButtons({ postsState }) {
  let [posts, setPosts] = postsState

  function changeTitle() {
    var clonePosts = [...posts]
    clonePosts[0].title = '나주 뷰 맛집';
    setPosts( clonePosts );
  }

  function changePostsArray() {
    var clonePosts = [...posts]
    var clonePosts00 = clonePosts[0]
    clonePosts[0] = clonePosts[1];
    clonePosts[1] = clonePosts00;
    setPosts( clonePosts )
  }

  return(
    <>
      <button onClick={ changeTitle }>1번글 제목 제목 바꾸기</button>
      <button onClick={ changePostsArray }>1번글 2번글 순서 바꾸기</button>
    </>
  )
}

function InputPostTitle({ postsState }) {
  let [posts, setPosts] = postsState
  const titleInput = useRef();

  function changePostTitle() {
    var inputTitle = titleInput.current.value
    var clonePosts = [...posts];
    clonePosts[2].title = inputTitle;
    setPosts( clonePosts )
  }

  return(
    <>
      <input ref={ titleInput } />
      <button onClick={ changePostTitle }>3번글 제목 입력해서 변경하기</button>
    </>
  )
}

export default List;

// {/* <span onClick={ { post.onClick } }>👍</span> { { post.up } } */}