import { useParams } from "react-router-dom";
import { PostsContext } from "../../contexts/PostsContext";
import { useContext } from "react";
import NotFound from "../layouts/NotFound";

export default function Post() {
  const { id } = useParams();
  const postsContext = useContext(PostsContext);
  const post = postsContext.find((element) => {
    return element.id === parseInt(id);
  });

  if (!post) {
    return (
      <>
        <NotFound />
      </>
    );
  } else {
    return (
      <>
        <p>{post.id}</p>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </>
    );
  }
}
