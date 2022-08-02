import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
// const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`
//key = API_KEY
const youtubeKey = 'AIzaSyBdAMpBHv8Y0yj-Az-EqXpl2m8hYFUH1g4'
const youtubeUrl = `https://www.googleapis.com/youtube/v3/search?key=${youtubeKey}&part=snippet`

//directus

const directus_items = `${process.env.REACT_APP_DIRECTUS_ITEMS}`
const directus_assets = `${process.env.REACT_APP_DIRECTUS_ASSETS}`

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [heros, setHeros] = useState()
  const [loading, setLoading] = useState(false)
  const [videos, setVideos] = useState([])
  const [error, setError] = useState(false)
  const [query, setQuery] = useState('crypto news')
  const [modal, setModal] = useState(false)

  // const fetchImage = async () => {
  //   setLoading(true)

  //   let url
  //   const page = `&page=1`
  //   const urlQuery = `&query= sun space`

  //   url = `${searchUrl}${clientID}${urlQuery}${page}`
  //   // url = mainUrl + clientID + space

  //   try {
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     // console.log(data)
  //     // console.log(data.results.length)
  //     const results = data.results
  //     // console.log(results)
  //     if (results.length > 0) {
  //       setHeros(results)
  //       setLoading(false)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     setLoading(false)
  //   }
  // }

  // useEffect(() => {
  //   fetchImage()
  // }, [])

  const fetchYoutubeVideos = async (url) => {
    setLoading(true)

    const response = await axios(url).catch((err) => console.log(err))
    if (response) {
      const data = response.data.items
      console.log(data)
      setVideos(data)
      setLoading(false)
    } else {
      setError(true)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const url = `${youtubeUrl}&type=video&videoDuration=medium&maxResults=10&q=${query}&videoEmbeddable=true`

    fetchYoutubeVideos(url)
    setModal(true)
  }

  const randomNum = (results) => {
    const num = Math.floor(Math.random() * results.length)
    // console.log(`number: ${num}`)
    return num
  }

  return (
    <AppContext.Provider
      value={{
        heros,
        error,
        loading,
        videos,
        query,
        modal,
        setModal,
        setError,
        setVideos,
        randomNum,
        setQuery,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

//custom hook

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
