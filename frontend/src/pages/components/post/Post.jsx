import React from 'react'
import './post.css'
import img from '../../assets/img.png'
import img2 from '../../assets/img2.png'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post({post}) {
    console.log(post)
  return (
    <div className='row shadow-lg my-5'>
        <div className="col mt-2">
            <div className="row mb-2  align-items-center">
                <div className="col-1 me-3 ">
                    <img src={img} className='profilePicturePost rounded-circle' alt=''/>
                </div>
                <div className="col-6 ">
                    <div className="d-flex flex-column">
                        <span className='usernameText fs-5 fw-bold'>percythearancinocat_</span>
                        <span className='timeStamp fs-6 fw-light'>{post.date}</span>
                    </div>
                </div>   
                <div className="col-auto ms-auto offset-md-2 ">
                    <button type="button " className="btn btn-outline-primary"><SearchOutlinedIcon/></button>
                    <MoreVertIcon/>
                </div>
                    
                   
            </div>
            
            <div className="row ">
                
                <img src={post.image} className='postImage img-fluid' alt=''/>
            </div>
            <div className='row border-bottom'>
              <span className="likeCounter fw-bold"> <FavoriteBorderIcon fontSize='large'/>{post.likes} Mi piace</span>
          
            </div>
            <div className="row" >
                <div className="col fw-6">
                    <span className='usernameText fw-bold me-2'>percythearancinocat_</span>
                    <span className='postDesc text-wrap'>{post?.desc}</span>
                </div>
                
            </div>
            <div className="row">
                <span className="postComment fs-6 fw-light">{post.com} Commenti</span>
            </div>
        </div>
        
      
    </div>
  )
}
