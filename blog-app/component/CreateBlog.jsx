"use client"
import React, {useState } from 'react'
import { useDispatch } from 'react-redux'
import { Addblog } from '@/Reducer/blogReducer'
import { useRouter } from 'next/navigation'

const CreateBlog = () => {
    const dispatch=useDispatch()
    const [title,setTitle]=useState('')
    const [content,setContent]=useState("")
const router = useRouter()
    const handleAdd=()=>{
        if (title&&content){
            const NewBlog={
                id: Number(Date.now()),
                title,
                content,
            }

            dispatch(Addblog(NewBlog))
            setTitle('')
            setContent('')

            router.push('/');
        }
    }
    return (
        <div className="p-4 max-w-md mx-auto mt-10 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Create a Blog</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Content:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 text-black"
            />
          </div>
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      );
    };
    
    export default CreateBlog;