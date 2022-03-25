import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";

export const Section = () => {
  const { section } = useParams();
  // console.log(section)
  const [detail, setDetail] = useState([]);
  //  const navigate =useNavigate()
  useEffect(() => {
    axios.get(`http://localhost:8080/books`).then((res) => {
      setDetail([...res.data]);
      console.log(res.data);
    });
  }, []);
  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page

  const Main = styled.div`
    /* Same as Homepage */
    display: grid;
    grid-template-columns: repeat(3, 400px);
    margin: 30px;
    padding: 50px;
  `;
  const handleSort = () => {};
  return (
    <>
      <h2 style={{ textAlign: "center" }}>{section}</h2>
      <SortAndFilterButtons handleSort={handleSort} />

      <Main className="sectionContainer">
        {detail
          .filter((e) => {
            if (e.section == section) {
              return true;
            } else {
              return false;
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
        {/* SHow same BookCard component here, just like homepage but with books only belong to this Section */}
      </Main>
    </>
  );
};
