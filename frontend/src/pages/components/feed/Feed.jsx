import React from 'react'
import './feed.css'
import SharePost from '../share/SharePost'
import Post from '../post/Post'

import { Posts } from '../../../PostProva'

export default function Feed() {
  return (
    <div className="col-10 bg-light">
      
      <div className='row'>
      
        <div className="col-6 offset-md-2 feedbox ">
             
             <SharePost/>
              {Posts.map( (p) =>(<Post key={p.id} post ={p} />))}
             
             
        </div>
        <div className="col-auto">
        </div>
      </div>
      
    </div>
  )
}
