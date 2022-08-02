import React from 'react'
import { useGlobalContext } from '../context'
import { Crypto, Navbar, Searchform, Videos, Loading } from '../components'

export const Dashboard = () => {
  const { modal, loading } = useGlobalContext()
  if (loading) {
    return (
      <main>
        <Searchform />
        <Loading />

        <Crypto />
      </main>
    )
  }
  return (
    <main>
      <Searchform />

      {modal && <Videos />}
      <Crypto />
    </main>
  )
}
