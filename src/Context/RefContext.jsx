import React, { createContext } from "react";
import all_product from "../Components/Assets/new_collections";

export const RefContext = createContext(null);

const RefContextProvider = (props)=>{
    const contextValue = {all_product}

    return (
        <RefContext.Provider value={contextValue}>
            {props.children}
        </RefContext.Provider>
    )
}

export default RefContextProvider;