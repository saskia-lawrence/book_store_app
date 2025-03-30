import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./style.css";
import BookDetails from "./BookDetails";

export default function BookName() {
  const [data, setData] = useState("");
  const [bookInfo, setBookInfo] = useState();
  const [search, setSerch] = useState("");

  async function getBookName() {
    try {
      const response = await Axios.get(
        `https://api.itbook.store/1.0/search/${search}`
      );
      setData(response.data);
    } catch (error) {
      alert("There is an error");
    }
  }

  function getIndexValue(c, b) {
    return b[parseInt(c)];
  }

  function eventHandler(event) {
    let a = event.target.id;
    let d = getIndexValue(a, data.books);
    setBookInfo(d);
  }

  return (
    <div className="container">
      <div>
        <input
          type="text"
          placeholder="Serch"
          value={search}
          onChange={(event) => setSerch(event.target.value)}
        />
        <button onClick={getBookName}>Fetch</button>
      </div>
      <div>
        {data &&
          data.books.map((book, index) => {
            return (
              <>
                <h3
                  onClick={eventHandler}
                  key={index}
                  id={index}
                  className="book-title"
                >
                  {book.title}
                </h3>
              </>
            );
          })}
      </div>
      {data && bookInfo && (
        <div className="book-info-container">
          <BookDetails bookInfo={bookInfo} />
        </div>
      )}
    </div>
  );
}
