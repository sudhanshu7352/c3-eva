import axios from "axios";
import { useEffect, useState } from "react";
import { BookCard } from "../BookCard/BookCard";
import styled from "styled-components";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";

export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below
  const [bookinfo, setBookinfo] = useState([]);
  const [fil, setFil] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8080/books").then((res) => {
      setBookinfo([...res.data]);
      //console.log(bookinfo)
    });
  }, []);

  const Main = styled.div`
    /* Apply some responsive styling to children */
    display: grid;
    grid-template-columns: repeat(3, 400px);
    margin: 30px;
    padding: 50px;
  `;

  const handleSort = (paramter, value) => {
    setFil({ paramter, value });
  };
  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons handleSort={handleSort} />

      <Main className="mainContainer">
        {bookinfo
          .sort((a, b) => {
            if (fil.paramter == "title" && fil.value == 1) {
              return a["title"].localeCompare(b["title"]);
            } else if (fil.paramter == "title" && fil.value == -1) {
              return b["title"].localeCompare(a["title"]);
            } else if (fil.paramter == "price" && fil.value == 1) {
              return a["price"] - b["price"];
            } else if (fil.paramter == "price" && fil.value == -1) {
              return b["price"] - a["price"];
            }
          })
          .map((el) => (
            <BookCard
              title={el.title}
              price={el.price}
              imageUrl={el.imageUrl}
              id={el.id}
            />
          ))}
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}
      </Main>
    </div>
  );
};
