import React from 'react'
import './feed.css'
import SharePost from '../share/SharePost'
import Post from '../post/Post'

import { Posts } from '../../assets/PostProva'

export default function Feed() {
  return (
    <div className="col-10">
      
      <div className='row bg-light vh-100'>
      
        <div className="col-6 offset-md-2 feedbox bg-white shadow-sm">
             
             <SharePost/>
              {Posts.map( (p) =>(<Post key={p.id} post ={p} />))}
             
             
        </div>
        <div className="col-auto">
        </div>
      </div>
      
    </div>
  )
}
