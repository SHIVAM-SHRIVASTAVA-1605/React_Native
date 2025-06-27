import { createContext } from "react";

export const NewContext = createContext({});

function NewProvider({children}) {
    const [count, setCount] = 
    function doSomething() {
        console.log("Doing something from context file");
    }

    let values = {
        doSomething,
        count,
        setCount,
    };

    return <NewContext.Provider>{values}</NewContext.Provider>;
}

export default NewProvider;