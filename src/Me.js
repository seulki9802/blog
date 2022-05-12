import seulki from './src_assets/seulki.JPG';

function Me() {
  return (
    <>
      <div className='me page'>
          <div className='left'>
            <img src={ seulki } alt="it's me" />
          </div>
          <div className='right'>
            <h1>안녕하십니까,<br/>개발을 즐기는 유슬기 입니다.</h1>
            <p>
              나는 어쩌고저쩌고 이래이래자라가지고 그러하다<br/>
              나는 만들어 내는 것을 좋아한다.<br/>
              누군가의 필요성을 채워주는 것은 나의 기쁨이다!<br/>
              하지만 css는 너무 어려운 것이다.<br/>
              부트스트랩 좋아<br/>
            </p>
          </div>
      </div>
    </>
  )
}

export default Me;