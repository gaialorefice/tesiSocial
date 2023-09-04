import React, { useState } from 'react'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../../PostProva';
import './profilepost.css'

export default function ProfilePost({post}) {
    
   
  return (

        
        <div className="col col-sm-4 border bg-info">   
                <img src={post.img} className='postImage mx-auto d-block ' alt=''/>
                
        </div>
     
    
    
  )
}
