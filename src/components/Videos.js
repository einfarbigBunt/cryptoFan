import React, { useEffect } from 'react'
import styled from 'styled-components'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
// import { VscClose } from 'react-icons/vsc'
import { useGlobalContext } from '../context'

const iframe = {
  // position: 'absolute',
  // width: 'inherit',
  // height: 'inherit',
  // textAlign: 'center',
  // display: 'flex',
  // placeItems: 'center',
  // border: 'none',
  // top: '0',
  // left: '0',
}

export const Videos = () => {
  const { videos } = useGlobalContext()
  const [index, setIndex] = React.useState(0)

  useEffect(() => {
    let lastIndex = videos.length - 1
    if (index > lastIndex) {
      setIndex(0)
    }
    if (index < 0) {
      setIndex(lastIndex)
    }
  }, [index, videos])
  // console.log(index)
  const url = 'https://www.youtube.com/embed/'
  return (
    <Wrapper>
      <div className='section-center'>
        <div className='video'>
          {videos.map((item, personIndex) => {
            const { videoId: id } = item.id
            const { title, publishedAt: dateAt } = item.snippet
            const date = dateAt.slice(0, 10)
            // console.log('index' + index)
            // console.log(personIndex)
            let position = 'nextSlide'
            if (personIndex === index) {
              position = 'activeSlide'
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === videos.length - 1)
            ) {
              position = 'lastSlide'
            }

            return (
              <div key={id} className={`article ${position}`}>
                <div className='iframe'>
                  <iframe
                    style={iframe}
                    // width='42'
                    // height='220'
                    title={title}
                    src={`${url}${id}`}
                    // framborder='0'
                    allowFullScreen
                  ></iframe>
                </div>

                <h4>
                  <span>{date}</span> : {title}
                </h4>
              </div>
            )
          })}
        </div>
        {/* <VscClose className='close-btn' /> */}
        <button
          className='prev'
          onClick={() => {
            setIndex(index - 1)
          }}
        >
          <FiChevronLeft />
        </button>
        <button
          className='next'
          onClick={() => {
            setIndex(index + 1)
          }}
        >
          <FiChevronRight />
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 90vw;
  margin: 0 auto;
  max-width: var(--fixed-width);
  /* border: 2px solid pink; */
  margin-bottom: 2rem;
  .section-center {
    position: relative;
    display: grid;

    place-items: center;
    /* border: solid 2px white; */
    /*  */
  }

  //video width and height same size as frame (frame totally non responsive)
  .video {
    /* position: relative; */
    height: 14rem;
    width: 90vw;
    max-width: var(--fixed-width);

    opacity: 1;
    /* transition: var(--transition); */
    /* 
    border: 2px solid yellow; */
  }
  @media screen and (min-width: 800px) {
    .video {
      /* width: 620px;
      height: 300px; */
    }
  }
  .article {
    position: absolute;
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: white;
    text-shadow: -3px 4px 4px #000000, -1px 2px 2px #000000;
    opacity: 0;
    transition: var(--transition);

    /* border: solid 5px green; */
  }
  .date {
    position: absolute;
    top: 165px;
    left: 160px;
    border: 1px solid black;
  }
  .activeSlide {
    opacity: 1;
    transform: translateX(0);
  }
  .lastSlide {
    /* opacity: 1; */
    transform: translateX(-100%);
  }
  .nextSlide {
    /* opacity: 1; */
    transform: translateX(100%);
  }

  .iframe {
    display: block;
    position: relative;
  }
  /* .iframe::after {
    content: 'date';
  } */
  .iframe:hover {
    /* animation: pulsate2 2s ease-in-out; */
    /* box-shadow: inset 2px 2px 2px var(--blue-2), inset 2px 2px 2px var(--blue-2),
      inset -1px -1px 4px var(--blue-3); */
  }
  /* @keyframes pulsate2 {
    
    0% {
      box-shadow: 1px 0px 10px #fff, 1px 0px 20px #fff;
    }
  } */
  /* .close-btn {
    position: absolute;
    top: -20px;

    transform: scale(1.8);
  
    border-radius: var(--radius);
    border: none;

    color: white;
    cursor: pointer;
  }
  .close-btn:hover {
    box-shadow: 2px 2px 2px var(--blue-2), 2px 2px 2px var(--blue-2),
      -1px -1px 4px var(--blue-3);
  } */
  .prev,
  .next {
    position: absolute;

    top: 60px;
    padding: 0.4rem 0.3rem 0.2rem 0.3rem;
    font-size: larger;

    background: transparent;
    /* text-transform: capitalize;
    letter-spacing: 1px; */
    transition: 0.2s ease-in-out;
    border-radius: var(--radius);
    border: none;
    box-shadow: 2px 2px 2px var(--blue-2), 2px 2px 2px var(--blue-2),
      -1px -1px 4px var(--blue-3);

    cursor: pointer;
    color: white;
    /* border-radius: 5%; */
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }
  .prev:active,
  .next:active {
    box-shadow: 1px 1px 2px var(--blue-2), 1px 1px 2px var(--blue-2),
      -0.25px -0.25px 4px var(--blue-3);
    /* inset 2px 2px 10px var(--blue-2), inset -1px -1px 5px var(--blue-3); */
  }
  .prev:hover {
    transform: scale(1.2);
  }
  .next:hover {
    transform: scale(1.2);
  }
  h4 {
    padding: 0rem 1rem 0rem 1rem;
    /* border: solid 2px yellow; */
    text-align: center;
    line-height: 1.35;
    /* text-shadow: none; */
  }

  @media (min-width: 800px) {
    .text {
      max-width: 45em;
    }
    .prev,
    .next {
      /* width: 2rem;
      height: 2rem;
      font-size: 1.5rem; */
    }
  }
`
