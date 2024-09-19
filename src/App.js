import "./App.css";
import { PostsContext } from "./contexts/PostsContext";
import AppRoutes from "./routes/AppRoutes";

const PostsList = [
  {
    id: 1,
    title: "Hello World-1",
    body: "fadsfadfdsafdsadsf",
  },
  {
    id: 2,
    title: "Hello World-2",
    body: "fadsfadfdsafdsadsf",
  },
  {
    id: 3,
    title: "Hello World-3",
    body: "fadsfadfdsafdsadsf",
  },
  {
    id: 4,
    title: "Hello World-4",
    body: "fadsfadfdsafdsadsf",
  },
];
function App() {
  return (
    <PostsContext.Provider value={PostsList}>
      <div className="App">
        <AppRoutes />
      </div>
    </PostsContext.Provider>
  );
}

export default App;
