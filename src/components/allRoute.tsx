import React from "react";
import { useRoutes } from "react-router-dom";
import { Detail } from "./detailPost";
import { Post } from "./postData";


export const AllRoute = () => {

    const element = useRoutes([
        {
            path: "/",
            element: <Post/> 
        },
        {
            path: "/details",
            element: <Detail /> 
        },
    ])

    return element
} 