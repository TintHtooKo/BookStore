import React, { useEffect, useState } from 'react'
import './Book.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Demo from '../../assets/ai.jpg'

export default function Book() {
    const [book,setBook] = useState([])

    useEffect(()=>{
        axios
        .get('http://localhost:8000/api/book/')
        .then((resp)=>{
            console.log(resp.data);
            setBook(resp.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])

  return (
    <div className='container'>
        <h1 style={{textAlign:'center',marginTop:'30px',fontWeight:'bold',textDecoration:'underline'}}>Book Collections</h1>
        <div className='imgPosition'>
            
                {
                    book.map((books,index)=>(
                        <div key={index} className='image'>
                            <Link  to={`/detail/${books.id}`}>
                                <img src={`http://localhost:8000${books.frontPage}`} />
                            </Link>
                        </div>
                    ))
                }
            
        </div>
    </div>
  )
}
