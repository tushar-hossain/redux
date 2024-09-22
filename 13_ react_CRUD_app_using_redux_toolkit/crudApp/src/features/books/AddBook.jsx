import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "./booksSlice";
import { useNavigate } from "react-router-dom";

const BookView = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const numberofBooks = useSelector((state) => state.booksReducer.books.length);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: numberofBooks + 1,
      title,
      author,
    };
    dispatch(addBook(book));
    navigate("/show-books", { replace: true });
  };

  return (
    <div>
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            name="author"
            id="author"
            value={author}
            required
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookView;
