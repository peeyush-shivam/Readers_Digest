import { useState } from "react";
import useContextHook from "../custom_hooks/useContextHook";
import BookEdit from "./BookEdit";

function BookShow({books}) {

    const {deleteBook} = useContextHook();

    const [showEdit, setShowEdit] = useState(false);
    const handleEdit = () => {
        setShowEdit(!showEdit);
    };
    const handleSubmit = () => {
        setShowEdit(false);
    };
    const handleDelete = () => {
        deleteBook(books.id);
    }; // Since the whole book object is passed down as an prop we extract the id from here which we have to delete.
    let toggle = <h5>{books.title}</h5>
    if(showEdit){
        toggle = <BookEdit onSubmit={handleSubmit} bookName={books} />
    }
    return (
      <div className="book-show">
        <img src="https://picsum.photos/id/367/1200" alt="books"/>
        <div>{toggle}</div>
        <div className="actions">
            <button className="edit" onClick={handleEdit}>
                Save
            </button>
            <button className="delete" onClick={handleDelete}> {// Each button will be rendered on a seperate BookShow component as called in the BookList component. Hence it will know which one to delete, which is the one it is on.
            }
            Delete
            </button>
        </div>
      </div>
    )
    };
  
  export default BookShow;