import { createSlice } from "@reduxjs/toolkit";
import data from "../data/blog/blogFile"

const initialState = {
  blogs: data,
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    Addblog: (state, action) => {
      state.blogs.push(action.payload);
    },
    DeleteBlog: (state, action) => {
      const id = action.payload;
      state.blogs = state.blogs.filter((blog) => blog.id !== id);
    },
    EditBlog: (state, action) => {
      const index = state.blogs.findIndex(
        (blog) => blog.id === action.payload.id
      );
      if (index >= 0) {
        state.blogs[index] = action.payload;
      }
    },
  },
});

export default blogSlice.reducer;
export const { Addblog, EditBlog, DeleteBlog } = blogSlice.actions;
export const selectBlogs = (state) => state.blogs.blogs;
