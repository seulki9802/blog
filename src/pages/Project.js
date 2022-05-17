import { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import seulki from '../src_assets/seulki.JPG';


function Project() {
  const projects = [
    {
      index: 0,
      title: '미니게임',
      intro: '게임이다. 애니메이션을 배웠다. 랭킹 시스템을 도입했다',
      skill: 'html, ??'
    },
    {
      index: 1,
      title: '투두앱',
      intro: '투두앱이다. 풀스택을 경험했다. 회원관리, 글쓰기, 채팅 등등',
      skill: 'html, nodeJs, mongoDB, ejx'
    },
    {
      index: 2,
      title: '내 포트폴리오',
      intro: '내 포트폴리오다. 리액트를 배웠다.',
      skill: 'react'
    }
  ]

  const [index, setIndex] = useState(0);
  const [project, setProject] = useState(projects[0])
  
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setProject(projects[selectedIndex])
  };


  return (
    <>
    <div className='project page'>
      <h1>My Projects!</h1>
      <Container>
        <ProjectsCarousel/>
      </Container>

      여기는 설명. <br/>
      Title: { project.title } <br/>
      Intro: { project.intro } <br/>
      Skill: { project.skill } <br/>

    </div>

    </>
  )

  function ProjectsCarousel() {
  
    return (
      <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>

        {

          projects.map((project) => {
            return (
              <Carousel.Item key={ project.index} >
                <img
                // className="d-block w-100"
                src={ seulki }
                alt={ project.title }
              />
                <Carousel.Caption>
                  <h3>{ project.index }</h3>
                  <h3>{ project.title }</h3>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })

        }
        
      </Carousel>
    );
  }
  
}
  
  export default Project;