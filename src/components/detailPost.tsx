import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchSingleData } from "./api";


export const Detail = () => {
    const { id } = useParams();

    const fetchData = useQuery({
        queryKey: ["post"],
        queryFn: () => fetchSingleData(id),
    });

    return (
        <>
            <h1>Details</h1>
            <br/>
            <br/>
            <br/>
            <br/>

            {
                fetchData.isLoading ? <h3>Loading...</h3> : null
            }

            <div>{fetchData.data?.title}</div>
            <div>{fetchData.data?.description}</div>
        </>
        
    )
}