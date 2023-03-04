import { createContext, useState } from "react";
import axios from "axios";
const booksContext = createContext();

function Provider({children}) { 

    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
      const response = await axios.get('https://petalite-equatorial-handspring.glitch.me/todos');
      setBooks(response.data);
    }
    const createBook = async (title) => {
      const response = await axios.post('https://petalite-equatorial-handspring.glitch.me/todos',{
        title: title
      });
      fetchBooks();
      // const addedBooks = [...books, response.data];
      // setBooks(addedBooks);
    }
    const deleteBook = async (id) => {
      await axios.delete(`https://petalite-equatorial-handspring.glitch.me/todos/${id}`);
      fetchBooks();
      // const deletedBooks = books.filter((x) => {
      //   return x.id !== id;
      // });
      // setBooks(deletedBooks);
    }
    const editBook =  async (id, newTitle) => {
      const response = await axios.put(`https://petalite-equatorial-handspring.glitch.me/todos/${id}`,{
        title: newTitle,
      });
      fetchBooks();
    //   const editedBooks = books.map((x) => {
    //     if (x.id === id){
    //       return {...x, ...response.data };
    //   }
    //   return x;
    // });
    //   setBooks(editedBooks);
    }

    const toShare = {
        books,
        fetchBooks,
        editBook,
        deleteBook,
        createBook
    }

    return (
        <booksContext.Provider value ={toShare}>
            {children}
        </booksContext.Provider>
    )
}

export { Provider };
export default booksContext;