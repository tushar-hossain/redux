import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    { id: 1, title: "Banglades", author: "Tushar Hossain" },
    { id: 2, title: "Love Story", author: "Shahin Alam" },
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
    editBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isBooksExist = state.books.filter((book) => book.id === id);
      if (isBooksExist) {
        isBooksExist[0].title = title;
        isBooksExist[0].author = author;
      }
    },
  },
});

export const { showBooks, addBook, deleteBook, editBook } = booksSlice.actions;

export default booksSlice.reducer;
