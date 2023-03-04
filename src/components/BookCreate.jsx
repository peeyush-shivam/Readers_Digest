import { useState } from "react";
import useContextHook from "../custom_hooks/useContextHook";

function BookCreate() {

    const {createBook} = useContextHook();

    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    }

    const handleChange = (event) => {
        setTitle(event.target.value);
    }
    return (
    <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit = {handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange} placeholder="Start typing here..."/>
            <div>
                <button className="button">Create</button>
            </div>
        </form>
      </div>
    )
  }
  
  export default BookCreate;