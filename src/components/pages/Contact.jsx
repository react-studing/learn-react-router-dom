import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <h1>Contact</h1>
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
