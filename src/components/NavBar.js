import React from "react";


function NavBar() {
  const links = ["home", "about", "projects"];
  const aTags = links.map((e, index) => {
      return <a href={"#" + e} key={index}>{e}</a>
    })
  return <nav>
    {aTags}
  </nav>;
}

export default NavBar;
