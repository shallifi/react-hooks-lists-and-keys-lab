import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const snakeTops = links.map((link) => (
    <a key={link} href={ "#"  + link} >{ link }</a>
  ) )

  return <nav>{snakeTops}</nav>;
}

export default NavBar;
