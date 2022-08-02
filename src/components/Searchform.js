import React from 'react'
import styled from 'styled-components'
import { MdSearch } from 'react-icons/md'
import { useGlobalContext } from '../context'

export const Searchform = () => {
  const { handleSubmit, query, setQuery } = useGlobalContext()

  return (
    <section className='section'>
      <Wrapper>
        <form className='search-form'>
          {/* amount */}
          <div className='form-control'>
            <MdSearch className='form-item' />

            <select
              name='category'
              id='category'
              className='form-input'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            >
              <option value='krypto'>krypto</option>

              <option value='krypto aktuell'>krypto aktuell</option>
              <option value='crypto'>crypto </option>
              <option value='crypto news'>crypto news</option>
              <option value='bitcoin'>bitcoin</option>
              <option value='ethereum'>ethereum</option>
            </select>
            <button type='submit' className='btn' onClick={handleSubmit}>
              <h4> Abrufen</h4>
            </button>
          </div>
        </form>
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.main`
  width: 90vw;
  max-width: var(--fixed-width);
  /* border: solid 2px yellow; */

  margin-bottom: 2rem;
  margin-top: -1rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
  }
  .search-form {
    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    gap: 2rem; */
  }
  .form-control {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 10px;

    align-items: center;
    justify-items: center;
    padding: 1.5rem 0;
    margin-bottom: 1.4rem;
    border-bottom: 1px solid var(--clr-grey-8);
    box-shadow: 0.5px 1.5px 3px 1px var(--clr-grey-8);
    /* background: transparent; */
    /* display: grid; */
    /* width: 90vw; */
    /* display: flex;
    align-items: center;
    justify-items: center; */
    /* grid-template-columns: auto 1fr;
    gap: 0.5rem;*/
    /* padding: 0.1rem 0.5rem 0.1rem 0.5rem; */
    /* 
    border-radius: var(--radius); */
    /* margin-bottom: 1rem; */
  }

  .form-item {
    width: 40px;
    height: 40px;
    margin-left: 1rem;
    color: white;
    /* transform: scale(2); */
    /* margin-left: 0.5rem; */
    /* margin-top: 0.3rem; */
    /* border: 2px solid white; */
  }
  .form-input:hover {
    animation: pulsate2 2s ease-in-out;
    /* box-shadow: inset 2px 2px 2px var(--blue-2), inset 2px 2px 2px var(--blue-2),
      inset -1px -1px 4px var(--blue-3); */
  }
  @keyframes pulsate2 {
    /* #4e00c2 */
    0% {
      box-shadow: 1px 0px 10px #fff, 1px 0px 20px #fff;
    }
  }
  select {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 1.2rem;
    background: transparent;
  }
  .form-input {
    border: none;
    background: transparent;
    /* background: var(--clr-grey-10); */
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 1.2rem;
    color: white;
    text-transform: capitalize;
    text-shadow: -3px 4px 3px #000000;
    padding: 0.25rem 1.5rem 0.25rem 1rem;

    /* width: 100%;   */
    /* border: 2px solid green; */
    border-radius: var(--radius);
  }

  .error {
    color: var(--clr-red-dark);
    text-transform: capitalize;
  }

  .btn {
    /* padding: 0.5rem 0.5rem 0rem 0.5rem; */
    padding: 0.35rem 0.5rem;
    margin-right: 2rem;
    background: transparent;
    text-transform: capitalize;
    letter-spacing: 1px;
    transition: 0.2s ease-in-out;
    border: none;
    /* padding: 0.2rem 0.5rem; */

    /* font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 1.2rem;
    color: white;
    text-shadow: -3px 4px 3px #000000;
    text-transform: capitalize; */
    /* border: solid 1px yellow; */
    /* background: transparent;
    border-radius: var(--radius); */
    /* border-radius: var(--radius); */
    /* cursor: pointer;
    border: none;
    box-shadow: 3px 3px 2px var(--clr-black), 2px 2px 2px var(--blue-2),
      -1px -1px 3px var(--blue-3);
    transition: var(--transition); */
  }
  .btn:hover {
    transform: scale(1.2);
    letter-spacing: 0.2rem;
    /* animation: pulsate 2s ease-in-out; */
    border-radius: 5%;
    box-shadow: 3px 3px 2px var(--clr-black), 2px 2px 2px var(--blue-2),
      -1px -1px 3px var(--blue-3);

    /* transform: scale(1.2); */
    /* font-size: 1.3rem; */
    /* border-radius: 20rem; */
    letter-spacing: 0.2rem;

    /* border-radius: 5%; */
  }

  .submit-btn {
    width: 100%;
    margin-top: 3rem;
  }
`
