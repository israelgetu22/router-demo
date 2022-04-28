import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <Link to="/about"> About</Link>
      <button
        style={{ color: "green" }}
        onClick={() => {
          navigate("/Photos");
        }}
      >
        Photos
      </button>

      <NavLink to="/Photos">About</NavLink>
    </div>
  );
}
