import React from 'react'
import NavBar from '../component/NavBar'
import Header from '../component/Header'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-[url("/bg_img.png")] bg-cover bg-center'>
      <NavBar/>
      <Header/>
    </div>
  )
}


export default Home;
