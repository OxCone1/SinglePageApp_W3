import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div id="homeElements">
            <Link to="/mission">Wanna see what we are up to?</Link>
            <Link to="/about">Click About, Go About</Link>
            <Link to="/contacts">Contact Us</Link>
        </div>
    );
}