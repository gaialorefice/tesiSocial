import React, { useState } from 'react'
import './header.css'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Header() {

    const [data,setData] = useState([]);
    const [search,setSearch] = useState([]);
    const PF =  process.env.REACT_APP_PUBLIC_FOLDER;

    const fetchData =  async (value)=>{
        const res = await axios.get("http://localhost:8800/api/users/")
        
        setData(res.data)
    }
        

    const searchHandler = (value) =>{
        var results = []
        data.forEach((e)=>{
            console.log();
            if(e.username.includes(value)){
                results.push(e)
            }
        })

        setSearch(results)

        if(value.length > 0){
            document.getElementById('search-results').classList.remove('d-none')
        }else{
            document.getElementById('search-results').classList.add('d-none')
        }
    }

    const getProfilePage = (value) => {
        window.location.href = value
    }
  return (

    <div className=' row headerBox  border-bottom shadow-sm align-item-center ' >
        <div className=' col-2 mt-2' > 
            <div className="row offset-md-2">
                <Link to="/">
                    <img src={PF+'postcard.png'} className='img-fluid headerLogo' alt=''/>
                </Link>
            </div>
        </div>
        <div className="col-10">
            <div className="row align-items-center mt-2">
                <div className=' col-6 offset-md-2 '>  
                    <div className="input-group">
                        <input style={{position: 'relative'}} type="text" id="searchBox" className="form-control" placeholder="Trova nuovi utenti..." aria-label="Search Bar" onClick={()=>{fetchData()}} onChange={(e)=>{searchHandler(e.target.value)}}/>
                        <div id="search-results" className='d-none shadow-sm'>
                            <br />
                            {search.map((element)=>{
                                return <div key={element._id}>
                                        <div className="d-flex flex-row align-items-center result" onClick={()=>{getProfilePage(`/profile/${element.username}`)}}>
                                            <img src={element.profilePicture? PF+"pfp/"+element.profiePicture : PF+'pfp/pfp.png'} className='rounded-circle profilePicturePost' alt=''/>
                                            <div className='ps-2'>{element.username}</div>
                                        </div>
                                    <hr />
                                </div>
                            })}
                        </div>
                        
                        {/* <SearchBar value={search}/> */}

                        <button className="btn btn-outline-primary" type="button" id="button-addon2"><SearchOutlinedIcon/></button>
                    </div>  
                </div>
                <div className='col-4'> 
                    {/* <NotificationsOutlinedIcon fontSize='large'sx={{color:'#478ba2'}}/>
                    <MessageOutlinedIcon fontSize='large'sx={{color:'#478ba2'}}/>  */}
                </div>
            </div>
        </div>
    </div>
    
  )
}
