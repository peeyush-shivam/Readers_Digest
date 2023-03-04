import { useState} from "react";
import useContextHook from "../custom_hooks/useContextHook";

function BookEdit({bookName, onSubmit}) {

    const{editBook} = useContextHook();

    const [editedTitle, setEditedTitle] = useState(bookName.title);
    const handleEdit = (event) => {
        setEditedTitle(event.target.value);
    };
    const changeTitle = (event) => {
        event.preventDefault();
        onSubmit();
        editBook(bookName.id, editedTitle);
    };
    return (
        <form className="book-edit" onSubmit={changeTitle}>
            <label>Title</label>
            <input className="input" value={editedTitle} onChange={handleEdit} />
            <button className="button is-primary">Save</button>
        </form>

    )
  };
  
  export default BookEdit;