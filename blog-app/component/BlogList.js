import Link from "next/link";
const BlogList = ({BlogList}) => {

  return (
    <ul>
        {BlogList.map((post)=>(
            <li key={post.id}>
                {/* <Link href={`/blog/${post.slug}`}>
                    {post.title}
                </Link >{' '}
                -{post.date} */}
                post.title
                post.content
                
            </li>

        )
        
        
        )}
    </ul>
   
  )
}

export default BlogList
