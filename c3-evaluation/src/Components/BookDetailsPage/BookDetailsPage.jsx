import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const BookDetailsPage = () => {
  const id =useParams()
  const [detail,setDetails] =useState([])

  useEffect(()=>{
    axios.get(`http://localhost:8080/books/${id}`).then((res)=>{
      setDetails([...res.data])
      console.log(detail)
    })
  },[])
  // Get book details based on ID whenever user lands on the page
  // ID will come from route

  return (
    <>
      <div className="bookContainer">
        <h2 className="title">{detail[id].title}</h2>
        <img className="image" src={detail.iamgeUrl} alt="#" />
        <div className="author">{detail.author}</div>
        <div className="description">{detail.description}</div>
        <div className="price">{detail.price}</div>
        <div className="section">{detail.section}</div>
        <div className="isbnNumber">{detail.isbnNumber}</div>
        <ul className="reviews">
          {/* Reviews will be an array, iterate over them and create a new <li> for every review */}
        </ul>
      </div>
    </>
  );
};
