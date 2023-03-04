import { useEffect } from "react";
import BookList from "./components/BookList";
import './App.css';
import BookCreate from "./components/BookCreate";
import useContextHook from "./custom_hooks/useContextHook";


function App() {

  const {fetchBooks} = useContextHook();

  useEffect(() => {
    fetchBooks();
  },[]);


  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  )
}

export default App;