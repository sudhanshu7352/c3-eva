import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const BookDetailsPage = () => {
  const {id} =useParams()
  const [detail,setDetail] =useState([])
 const navigate =useNavigate()
  useEffect(()=>{
    axios.get(`http://localhost:8080/books/${id}`).then((res)=>{
      setDetail([res.data])
      console.log(detail)
    }).catch((e)=>{
      navigate("/error")
    })
  },[])
  // Get book details based on ID whenever user lands on the page
  // ID will come from route

  return (
    <>
     {detail.map((e)=>(
         <div className="bookContainer" key={e.id}>
         <h2 className="title">{e.title}</h2>
         <img className="image" src={e.imageUrl} alt="#" />
         <div className="author">{e.author}</div>
         <div className="description">{e.description}</div>
         <div className="price">{e.price}</div>
         <div className="section">{e.section}</div>
         <div className="isbnNumber">{e.isbnNumber}</div>
         <ul className="reviews">
           {/* Reviews will be an array, iterate over them and create a new <li> for every review */}
         </ul>
       </div>
     ))} 
    </>
  );
};
