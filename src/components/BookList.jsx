import BookShow from "./BookShow"
import useContextHook from "../custom_hooks/useContextHook";

function BookList() {

  const { books } = useContextHook();

  const renderedBookList = books.map((x) => {
      return (
        <BookShow key={x.id} books={x} /> ); 
      });  // This fuction will map and after than render a compleletly new BookShow component every time the user enters any book. 
    return (
      <div className="book-list">
        {renderedBookList}
      </div>
    )
  }
  
  export default BookList;