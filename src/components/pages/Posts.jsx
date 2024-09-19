import { useContext } from "react";
import { Link } from "react-router-dom";
import { PostsContext } from "../../contexts/PostsContext";

export default function Posts() {
  const postsContext = useContext(PostsContext);

  return (
    <>
      <h1>Posts</h1>
      {postsContext.map((element) => {
        return (
          <Link key={element.id} to={`/posts/${element.id}`}>
            <h1>{element.title}</h1>
          </Link>
        );
      })}
      <Link to="/posts/create-post">
        <button>create a new post</button>
      </Link>{" "}
      <Link to="/posts/delete-post">
        <button>delete a post</button>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div>
          <h1
            style={{
              backgroundColor: "red",
              color: "white",
              width: "70%",
              margin: "50px auto",
              borderRadius: "10px",
            }}
          >
            go to Home
          </h1>
        </div>
      </Link>
    </>
  );
}
