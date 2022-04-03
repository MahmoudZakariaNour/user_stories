import React from "react";
import { Link } from "react-router-dom";

export function Home(){
    return(
        <div>
            <Link to="/home">List Authors</Link> <br/>
            <Link to="/posts">Posts List</Link>
        </div>
    );
}