import React from 'react'
import { useGlobalContext } from '../context'
import styled from 'styled-components'

// import { FaBars } from 'react-icons/fa'
// import { FaTimes } from 'react-icons/fa'
// import { FaCalendar } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  // console.log(isSidebarOpen)
  return (
    <Wrapper>
      <div className='nav-center'>
        <div className='nav-header'>
          <NavLink to='/' className='nav-logo link-btn'>
            crypto
          </NavLink>
          {/* <div className={`${isSidebarOpen ? 'nav-links show' : 'nav-links'}`}>
        

            <NavLink to='about' className='link-btn'>
              Shop
            </NavLink>
          </div> */}
          {/* <button
            className='btn toggle-btn'
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button> */}
          <NavLink to='/shop' className='link-btn'>
            Shop
          </NavLink>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  position: relative;
  z-index: 1;
  margin-bottom: 4rem;
  .nav-center {
    width: 90vw;
    max-width: var(--max-width);
    /* border: 1px solid yellow; */
    .nav-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* border: 1px solid yellow; */
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
      .link-btn {
        height: 100%;
        background: transparent;
        border-color: transparent;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 1.5rem;
        color: white;
        text-shadow: -2px 2px 5px #000000;
        text-transform: capitalize;
        letter-spacing: 1px;
        text-align: center;
        /* width: 8rem; */
        border-radius: 5%;
        padding: 0.2rem 0.8rem;
        box-shadow: 3px 3px 2px var(--clr-black), 2px 2px 2px var(--blue-2),
          -1px -1px 3px var(--blue-3);
        /* border: 1px solid yellow; */
        /* visibility: hidden; */
      }
      .nav-logo {
        text-transform: uppercase;
        font-size: 1.5rem;
      }
      .active {
        font-weight: 800;
        box-shadow: none;
        /* transform: scale(1.2); */
        /* letter-spacing: 1.2rem; */
      }
    }
    @media screen and (min-width: 800px) {
      .nav-center {
        width: 90vw;
        max-width: 750px;

        /* border: 2px solid pink; */
      }

      .link-btn {
        height: 100%;
        background: transparent;
        border-color: transparent;
        font-size: 1.3rem;
        color: white;
        text-shadow: -2px 2px 5px #000000;
        text-transform: capitalize;
        letter-spacing: 1px;
        width: 10rem;
      }
      .active {
        font-weight: 800;
      }
    }
  }
`

export default Navbar
