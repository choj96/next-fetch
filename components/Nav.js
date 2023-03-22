import Link from "next/link";
import React from "react";
import navStyle from "../styles/nav.module.css";

const Nav = () => {
  return (
    <div className={navStyle.nav}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/photos">
            <a>Cat Photos</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
