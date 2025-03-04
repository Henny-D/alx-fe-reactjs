import { useParams } from "react-router-dom";

function BlogPost() {
  let { Id } = useParams();

  return (
    <div>
      <h1>Blog Post {Id}</h1>
      <p>This is the content for blog post {Id}.</p>
    </div>
  );
}

export default BlogPost;
