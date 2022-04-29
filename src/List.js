import { useState, useRef } from 'react';

function List({ postsState, onRemove, onToggle }) {

  let [posts, setPosts] = postsState;

  let [show, setShow] = useState({ isShow : false, buttonText : '리스트 보기' })
  function listShow() {
    var cloneShow = {...show};
    cloneShow.isShow = !cloneShow.isShow;
    if (cloneShow.isShow) cloneShow.buttonText = '리스트 닫기'
    else cloneShow.buttonText = '리스트 보기'

    setShow(cloneShow)
  }

  return (
    <>
      <button onClick={ listShow }>{ show.buttonText }</button><br/>

      { show.isShow && <>
        
        <ChangePostsButtons postsState={ [posts, setPosts] } /><br/>
        <InputPostTitle postsState={ [posts, setPosts] } />

        { posts.map((post) => {
          return <Post post={ post } key={ post.id.toString() } onRemove={ onRemove } onToggle={ onToggle }/>
        }) }

      </> }

    </>
  );
}

// List.defaultProps = {
//   name: '이름없음'
// }


function Post({ post, onRemove, onToggle }) {

  let [number, setNumber] = useState(0)
  function numberUp(){
    setNumber( number + 1 )
  }

  return(
    <div className='list'>
      <h3>
        <b onClick={ () => onToggle(post.id) } style={ { cursor : 'pointer', color : post.active ? 'green' : 'black' } }>
          { post.title }
        </b>
        <span onClick={ numberUp }>👍</span>{ number }
      </h3>
      <p> { post.date } 발행</p>
      <p> id: { post.id } <span onClick={ () => onRemove(post.id) }>삭제❌</span></p>
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