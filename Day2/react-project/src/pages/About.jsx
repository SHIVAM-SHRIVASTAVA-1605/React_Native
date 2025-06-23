import React from "react";
import { Link } from "react-router-dom";

function About() {

    const [loading, setLoading] = useState(false);
    
    //   async function getTodoData() {
    //     try {
    //       setLoading(true);
    //       const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    //       const data = await response.json();
    //       console.log("Data --> ", data)
    //     } catch (error) {
    //       setLoading(false);
    //       console.log("error --> ", error);
    //     }
    //   }

    return (
        <div>
            <h1>
                This is About page
            </h1>
            <Link style={{ color: "white" }} to ="/"> Go to Home Page</Link>

            {/* {todoData.map((item) => <div style={{ backgroundColor: "pink", width: '300px', hright: '50px'}}>
                <h1 style={{ textWrap: 'wrap'}} > </h1>)} */}

            {/* {
                todoData.map((item) => {
                    return(
                        <li style ={{ color: "wheat"}}>
                            {item.title}
                        </li>
                    )
                })
            } */}
        </div>
    )
}

export default About;