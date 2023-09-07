import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

// id:rimSwFYoqgXa4wIk8KQ2

const path = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rimSwFYoqgXa4wIk8KQ2/books';

const initialState = {
  bookList: [],
};

export const getBooks = createAsyncThunk('books/getBooks', async (thunkAPI) => {
  try {
    const list = await axios(path);
    return list.data;
  } catch (err) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const postBook = createAsyncThunk('books/postBook', async (data, thunkAPI) => {
  const book = {
    item_id: uuidv4(),
    title: data.title,
    author: data.author,
    category: data.category,
  };

  try {
    const res = await axios.post(path, book);
    return res.data;
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const removeBookAPI = createAsyncThunk('books/removeBook', async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`${path}/${id}`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bookList = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      })
      .addCase(postBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postBook.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postBook.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(removeBookAPI.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeBookAPI.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(removeBookAPI.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});
export default bookSlice.reducer;
