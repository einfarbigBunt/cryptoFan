import React from 'react'
import styled from 'styled-components'
// import Sidebar from './Sidebar'
import hero from '../images/space.jpeg'
import heroSun from '../images/sun.jpeg'
// import { useGlobalContext } from '../context'

const Hero = () => {
  // const { heros, randomNum } = useGlobalContext()

  // if (!heros) {
  //   return
  // }

  // const num = randomNum(heros)

  // const { urls } = heros[num]

  // const { regular } = urls
  // console.log(regular)

  const background = {
    backgroundImage: `url(${hero})`,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    backgroundSize: 'cover',
    height: '120vh',
    // minHeight: '100vh',
    // marginTop: '-10rem',
    zIndex: '-1',
  }

  return (
    // <Wrapper></Wrapper>
    <section style={background}></section>
  )
}

// const Wrapper = styled.section`
//   display: grid;
//   justify-items: center;
//   width: '100%';
//   background-size: 'cover';
//   background-image: url(${hero});
// `

export default Hero
