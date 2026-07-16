import React from 'react'
import { fetchPhotos } from './api/mediaApi'
import { fetchVideos } from './api/mediaApi'
import { fetchGifs } from './api/mediaApi'

import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import Navbar from './components/Navbar'

const App = () => {

  // async function getPhotos(){
  //   const data = await fetchPhotos('cat')
  //   console.log(data.results)
  // }

  // async function getVideos(){
  //   const data = await fetchVideos('dog')
  //   console.log(data.videos)
  // }

  // async function getGifs(){
  //   const data = await fetchGifs('rat')
  //   console.log(data)
  // }

  return (
    <div className="h-screen text-white w-full bg-gray-950">
    <Navbar />
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/collection" element={<CollectionPage />} />
    </Routes>

    <ToastContainer />

      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4" onClick={getPhotos}>
        Get Photos
      </button>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4" onClick={getVideos}>
        Get Videos
      </button>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4" onClick={getGifs}>
        Get GIFs
      </button> */}

    </div>
  )
}

export default App