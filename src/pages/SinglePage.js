import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// import { useGlobalContext } from '../context'
// import { FiPlus, FiMinus } from 'react-icons/fi'
import axios from 'axios'
import styled from 'styled-components'

import { links } from '../data'
import { useEffect } from 'react'

// const directus_items = `${process.env.REACT_APP_DIRECTUS_ITEMS}`
// const directus_assets = `${process.env.REACT_APP_DIRECTUS_ASSETS}`

// const rootDirectus = 'https://mxkk50t7.directus.app/'

export const SinglePage = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [posts, setPosts] = useState([])
  const [fullMode, setFullMode] = useState(false)

  const { pageId } = useParams()
  // console.log(useParams())
  console.log(pageId)

  const singlePage = links.find((link) => link.id === pageId)
  // console.log(singlePage)

  const { directus, label, imageSingle } = singlePage

  const fetchDirectusPosts = async (url) => {
    setLoading(true)
    const response = await axios(url).catch((err) => console.log(err))
    console.log(response.data.data)
    if (response) {
      const data = response.data.data
      console.log(data)
      setPosts(data)

      setLoading(false)
    } else {
      setError(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    // const url = `${rootDirectus}items/${directus}`
    // fetchDirectusPosts(url)
  }, [])

  return (
    <Wrapper>
      <div className='single-page'>
        <div className='posts'>
          {posts.map((post, index) => {
            const { image, video, title, text, format } = post
            console.log(format)
            let formatClass
            if (format === 'hoch') {
              formatClass = 'grid-row-span-2'
            } else if (format === 'quer') {
              formatClass = 'grid-col-span-2'
            } else {
              formatClass = 'quadrat'
            }
            console.log(formatClass)
            return (
              // <article key={index}>
              <article key={index} className={`post-container ${formatClass} `}>
                {((video && image) || video) && (
                  <video controls>
                    <source
                      // src={`${rootDirectus}assets/${video}`}
                      type='video/mp4'
                    />
                  </video>
                )}
                {/* {!video && image && (
                   <img src={`${rootDirectus}assets/${image}`} alt={title} />
                )} */}
                <h4>{title}</h4>

                <div dangerouslySetInnerHTML={{ __html: text }} />

                {/* <button
                    className='btn'
                    onClick={() => setFullMode(!fullMode)}
                  >
                    {fullMode ? <FiMinus /> : <FiPlus />}
                  </button> */}
              </article>
            )
          })}
        </div>
        {/* <h5>{label}</h5> */}

        <Link to='/'>
          <h4>Zurück</h4>
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 90vw;
  margin: 0 auto;
  /* border: solid 2px white; */
  .posts {
    display: grid;
    gap: 1rem;
    margin: 0 auto;
    /* margin-inline: auto; */

    /* border: 2px solid yellow; */
  }
  article {
    position: relative;
    /* border: solid 2px yellow; */
  }

  .post-container {
    /* border: solid 2px green; */
    /* margin-bottom: 2rem; */
    /* height: 270px; */
    /* position: absolute; */
    display: grid;
    overflow: hidden;
    box-shadow: 3px 4px 2px var(--blue-2), 2px 2px 4px var(--blue-2),
      -0.25px -0.25px 4px var(--blue-3);
  }
  .btn {
    position: absolute;
    bottom: 0px;
    right: 0px;

    padding: 1rem 1rem;
    border: transparent;
    border-radius: 1.5rem;
    box-shadow: 3px 4px 2px var(--blue-2), 2px 2px 4px var(--blue-2),
      -0.25px -0.25px 4px var(--blue-3);
    /* margin-right: 2rem; */
    background: transparent;
    color: white;
    transition: 0.2s ease-in-out;
  }

  .post-container video {
    width: 100%;

    display: block;
    object-fit: cover;
  }
  .post-container img {
    width: 100%;
    display: block;
    /* object-fit: cover; */
    object-fit: cover;
  }
  h4 {
    margin-top: 0.3rem;
    padding: 0 0.2rem 0 0.4rem;
  }
  p {
    margin-top: 0.8rem;
    margin-bottom: 1.25rem;
    padding: 0 0.2rem 0 0.4rem;
  }

  @media (min-width: 800px) {
    .posts {
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      justify-content: center;
      align-content: center;

      max-width: var(--max-width);
      /* border: solid 2px yellow; */
    }
    .grid-row-span-2 {
      grid-row: span 2;
    }
    .grid-col-span-2 {
      grid-column: span 2;
    }
    .quadrat {
      /* grid-row: span 1; */
      grid-column: span 1;
    }
  }
`
