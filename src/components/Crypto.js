import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { links } from '../data'

export const Crypto = () => {
  return (
    <>
      {' '}
      <Wrapper>
        {links.map((link) => {
          return (
            <article key={link.id}>
              <div className='icon'>
                {link.image ? (
                  <img src={link.image} alt='icon' />
                ) : (
                  <div className='icon-icon' id={link.label}>
                    {link.icon}{' '}
                  </div>
                )}
              </div>

              <a href={link.referral} className='link a-link'>
                <h3>{link.label}</h3>
              </a>

              <Link to={`/crypto/${link.id}`} className='link'>
                <h4> mehr Info</h4>
              </Link>
            </article>
          )
        })}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  width: 90vw;
  margin: 0 auto;
  max-width: var(--fixed-width);
  /* border: 2px solid white; */
  article {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 10px;

    align-items: center;
    justify-items: center;
    padding: 0.6rem 0;
    margin-bottom: 1.4rem;
    border-bottom: 2px solid white;
    box-shadow: 1px 2px 4px 1px white;
  }

  .link {
    padding: 0.4rem 0.5rem;
    margin-right: 2rem;
    background: transparent;
    text-transform: capitalize;
    letter-spacing: 1px;
    transition: 0.2s ease-in-out;

    /* border: 1px solid yellow; */
  }
  .link:hover {
    transform: scale(1.2);
    letter-spacing: 0.2rem;
    /* animation: pulsate 2s ease-in-out; */
    border-radius: 5%;
    box-shadow: 2px 2px 2px var(--blue-2), 2px 2px 2px var(--blue-2),
      -1px -1px 4px var(--blue-3);

    /* -2px -2px 4px var(--blue-2),
      2px 2px 2px rgba(255, 255, 255, 0.075), 2px 2px 4px rgba(0, 0, 0, 0.15); */

    /* box-shadow: 0px 0.25px 0.5px 0px white; */
  }
  /* @keyframes pulsate {
   
    0% {
      box-shadow: 1px 0px 5px #fff, 1px 0px 5px #fff;
    }
  } */

  .link:active {
    box-shadow: 1px 1px 2px var(--blue-2), 1px 1px 2px var(--blue-2),
      -0.25px -0.25px 4px var(--blue-3);
    /* inset 2px 2px 10px var(--blue-2), inset -1px -1px 5px var(--blue-3); */
  }
  .a-link {
    padding: 0.1rem 0.5rem 0.3rem 0.5rem;
  }
  .icon {
    width: 70px;
    height: 70px;
    margin-left: 1rem;
    /* border: 1px solid pink; */
  }
  .icon img {
    width: 100%;
  }

  .icon-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    /* border: 2px solid green;
  border-radius: 50%; */
  }
  #kraken {
    color: purple;
    transform: scale(1.1);
  }
  #coinbase {
    color: blue;
    transform: scale(1.2);
  }
  @media screen and (min-width: 800px) {
    article {
      padding: 0.8rem 0;
    }
    section {
      max-width: var(--fixed-width);
    }
  }
`
