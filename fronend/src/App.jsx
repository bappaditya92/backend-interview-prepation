import { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'

function App() {
  const [books, setbooks] = useState([]);
  useEffect(()=>{
    axios.get('/api/books')
    .then((response)=>{
      setbooks(response.data)
    }
  )
  .catch((error)=>{
    console.log(error);
    
  })

  })

  return (
    <>
      <h1>UI is Running...</h1>
      <p>BOOKS: {books.length}</p>

      {books.map((book, index) => {
        <div key={book.id}>
          <h3>{book.name}</h3>
          <h3>{book.author}</h3>
        </div>;
      })}
    </>
  );
}

export default App;
