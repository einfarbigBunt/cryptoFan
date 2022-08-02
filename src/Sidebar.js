import React from 'react'
import { useRef } from 'react'
import { FaBorderNone, FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen, closeSidebar } = useGlobalContext()
  const refContainer = useRef(null)
  console.log(isSidebarOpen)

  const style = {
    display: 'none',
    transition: '0.2s lienar',
  }
  const handleClick = () => {
    refContainer.current.className = 'close'
    setIsSidebarOpen(false)
    // console.log(refContainer.current)
  }
  return (
    <aside
      className={`${isSidebarOpen ? 'sidebar show' : 'sidebar'}`}
      ref={refContainer}
    >
      <div className='sidebar-center'>
        <button className='btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          <Link to='/' className='sidebar-btn' onClick={handleClick}>
            home
          </Link>

          <Link to='about' className='sidebar-btn'>
            About
          </Link>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
