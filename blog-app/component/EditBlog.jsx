import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { EditBlog } from '@/Reducer/blogReducer';
import { useRouter } from 'next/router';

const EditPage = ({ id, initialTitle, initialContent }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const router = useRouter();

  const handleEdit = () => {
    if (title && content) {
      const editedBlog = {
        id,
        title,
        content,
      };

      dispatch(EditBlog(editedBlog));
      router.push('/');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto mt-10 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Edit Blog</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
        />
      </div>
      <button
        onClick={handleEdit}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Save
      </button>
    </div>
  );
};

export default EditPage;
