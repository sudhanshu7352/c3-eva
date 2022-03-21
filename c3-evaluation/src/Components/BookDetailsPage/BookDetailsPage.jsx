import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const BookDetailsPage = () => {
  const id =useParams()
  const [detail,setDetails] =useState([])

  useEffect(()=>{
    axios.get(`http://localhost:8080/books/${id}`).then((res)=>{
      setDetails([...res.data])
     // console.log(detail)
    })
  },[])
  // Get book details based on ID whenever user lands on the page
  // ID will come from route

  return (
    <>
     {detail.map((e)=>(
         <div className="bookContainer" key={e.id}>
         <h2 className="title">{e.title}</h2>
         <img className="image" src={e.iamgeUrl} alt="#" />
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
