import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Posts from "../components/pages/Posts";
import Post from "../components/pages/Post";
import NotFound from "../components/layouts/NotFound";
import CreatePost from "../components/pages/CreatePost";
import DeletePost from "../components/pages/DeletePost";
import AppLayout from "../components/layouts/AppLayout";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="posts">
            <Route index element={<Posts />} />
            <Route path=":id" element={<Post />} />
            <Route path="create-post" element={<CreatePost />} />
            <Route path="delete-post" element={<DeletePost />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
