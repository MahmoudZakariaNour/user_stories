import React from "react";

export function Navbar() {
    return (
<nav className="navbar" style={{background:"darkgrey"}} >
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="/" style={{color:"black"}}>API TEST</a>
    </div>
    <ul className="nav navbar-nav navbar-right">
      <li className="active"><a href="/home" style={{color:"black"}}>Author</a></li>
      <li><a href="/posts" style={{color:"black"}}>Posts</a></li>
    </ul>

  </div>
</nav>
    );
};