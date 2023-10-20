import React from 'react'
import Feed from '../components/feed/Feed'
import Header from '../components/header/Header'
import Leftbar from '../components/leftbar/Leftbar'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function Home() {

  const {user, isFetching, error, dispatch} = useContext(AuthContext);

  return (
    <div>
      <>
      <Header/>
          <div className="row homeContainer bg-light vh-100">
          
          <Leftbar from='home'/>
          <Feed />
         
      </div>
        
        
      </>
    </div>
  )
}
