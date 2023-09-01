import React from 'react'
import Feed from '../components/feed/Feed'
import Header from '../components/header/Header'
import Leftbar from '../components/leftbar/Leftbar'


export default function Home() {
  return (
    <div>
      <>
      <Header/>
      <div className="row homeContainer">
          <Leftbar/>
          <Feed/>
      </div>
        
        
      </>
    </div>
  )
}
