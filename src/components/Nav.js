import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        src="//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
        className="nav__logo"
        onClick={() => window.location.reload()}
      />
      <img
        src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
        alt="User logged"
        className="nav__avarter"
      />
    </nav>
  );
};

export default Nav;
