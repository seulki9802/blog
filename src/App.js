import { useState } from 'react';
import List from './List';
import Wrapper from './Wrapper';
import InputSample from './InputSample';
import './App.css';
import seulki from './src_assets/seulki.JPG';

function App() {

  let [show, setShow] = useState({ isShow : false, buttonText : '리스트 보기' })
  function listShow() {
    var cloneShow = {...show};
    cloneShow.isShow = !cloneShow.isShow;
    if (cloneShow.isShow) cloneShow.buttonText = '리스트 닫기'
    else cloneShow.buttonText = '리스트 보기'

    setShow(cloneShow)
  }

  return (
    <div className="App">

      <div className="black-nav">
        개발개발 블로그 blog BLOG Blog
      </div>

      <img src={ seulki } className="image-size" alt="seulki" /><br/>
      <InputSample />


      <Wrapper>
        <button onClick={ listShow }>{ show.buttonText }</button>
        <List name="suelki's list" isShow={ show.isShow }/>
      </Wrapper>

      <Modal />


    </div>
  );
}

function Modal() {
  return(
    <>
    <div className='modal'>
      <h2>title</h2>
      <p>date</p>
      <p>detail</p>
    </div>
    </>
  )
}

export default App;