import React from 'react'
import Feed from '../components/feed/Feed'
import Header from '../components/header/Header'
import Leftbar from '../components/leftbar/Leftbar'



export default function Home() {


  return (
    <div>
      <>
      <Header/>
      <div className="row homeContainer bg-light vh-100">
          <Leftbar/>
          <Feed/>
         
      </div>
        
        
      </>
    </div>
  )
}
