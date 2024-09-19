import { Link, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
        <Link to="/posts">
          <button>Posts</button>
        </Link>
      </div>
      <Outlet />
    </>
  );
}
