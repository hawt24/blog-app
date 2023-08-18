"use client";
import { useSelector, useDispatch } from "react-redux";
import { selectBlogs } from "@/Reducer/blogReducer";
import Link from "next/link";
import { DeleteBlog } from "@/Reducer/blogReducer";
import EditPage from "./Edit/page";

export default function Home() {
  const blogs = useSelector(selectBlogs);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(DeleteBlog(id));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
          <Link href={"/create"}>Add Blog</Link>
        </button>
        {blogs.map((blog) => (
          <li key={blog.id} className="mb-4">
            <h3 className="text-lg font-semibold">{blog.title}</h3>
            <p className="mt-2">{blog.content}</p>
            <div className="flex mt-2 space-x-2">
              <Link
                href={{
                  pathname: "/Edit",
                  query: {
                    id: blog.id,
                    initialTitle: blog.title,
                    initialContent: blog.content,
                  },
                }}
              >
                <span className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Edit
                </span>
              </Link>
              <button
                className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={() => handleDelete(blog.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </div>
    </main>
  );
}
