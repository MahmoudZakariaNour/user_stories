import React from "react";

export function Navbar() {
    return (
<nav class="navbar" style={{background:"darkgrey"}} >
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="/" style={{color:"black"}}>API TEST</a>
    </div>
    <ul class="nav navbar-nav navbar-right">
      <li class="active"><a href="/home" style={{color:"black"}}>Author</a></li>
      <li><a href="/posts" style={{color:"black"}}>Posts</a></li>
    </ul>

  </div>
</nav>
    );
};