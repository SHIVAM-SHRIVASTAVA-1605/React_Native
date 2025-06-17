import React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <h1>
                This is About page
            </h1>
            <Link to ="/"> Go to Home Page</Link>
        </div>
    )
}

export default About;