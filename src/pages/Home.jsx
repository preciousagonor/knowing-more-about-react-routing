import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div> Welcome to home page</div>
    <Link to = "/products">Go to product details page</Link>
    </>
  )
}

export default Home
