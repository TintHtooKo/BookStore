import React, { useEffect, useState } from 'react'
import './Detail.css'
import Demo from '../../assets/ai.jpg'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Detail() {
  const [book,setBook] = useState([])
  const {id} = useParams()

  useEffect(()=>{
    axios
    .get(`http://localhost:8000/api/book/detail/${id}`)
    .then((resp)=>{
      setBook(resp.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])

  return (
    <>
      <h1 style={{textAlign:'center',fontWeight:"bold",textDecoration:'underline'}}>Detail</h1>
      <div className='detail'>
        <div className='detailImg'>
          <img src={`http://localhost:8000${book.frontPage}`} style={{width:'320px',height:'450px',borderRadius:'20px'}}/>
        </div>
        <div className='detailList'>
          <ul>
            <li>Name - {book.name}</li>
            <li>Author - {book.author}</li>
            <li>About - <span>{book.about}</span></li>
          </ul>
        </div>
      </div>

      <h3 style={{fontSize:'4rem',textAlign:'center',marginTop:'5%'}}>Sample</h3>
      <div className='detailPage'>
        <div>
          <img className='image' src={`http://localhost:8000${book.page1}`} style={{width:'420px',height:'550px',borderRadius:'20px'}}/>
          <p style={{marginLeft:'30px',marginTop:"20px",fontSize:'1.5rem'}}>Page 1</p>
        </div>
        <div>
          <img className='image' src={`http://localhost:8000${book.page2}`} style={{width:'420px',height:'550px',borderRadius:'20px'}}/>
          <p style={{marginLeft:'30px',marginTop:"20px",fontSize:'1.5rem'}}>Page 2</p>
        </div>
        <div>
          <img className='image' src={`http://localhost:8000${book.page3}`} style={{width:'420px',height:'550px',borderRadius:'20px'}}/>
          <p style={{marginLeft:'30px',marginTop:"20px",fontSize:'1.5rem'}}>Page 3</p>
        </div>
        <div>
          <img className='image' src={`http://localhost:8000${book.page4}`} style={{width:'420px',height:'550px',borderRadius:'20px'}}/>
          <p style={{marginLeft:'30px',marginTop:"20px",fontSize:'1.5rem'}}>Page 4</p>
        </div>       
      </div>
      <a href={`http://localhost:8000${book.file}`} download style={{ textDecoration: 'none', color: 'inherit' }}>
        <button className='btn btn-lg btn-success' style={{ width: '35%' }}>
          Download pdf Free
        </button>
      </a>
    </>
  )
}
