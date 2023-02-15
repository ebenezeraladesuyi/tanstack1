import React, { useState } from "react";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { fetchPost, creatingPostData } from "./api";
import { Link } from "react-router-dom";


export const Post = () => {

    const queryClient = useQueryClient();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const getPost = useQuery({
        queryKey: ["post"],
        queryFn: fetchPost,
    });

    const posting = useMutation({
        mutationFn: creatingPostData,

        onSuccess: (data) => {
            queryClient.invalidateQueries(["post"])
        },
    });

    const handleSubmit = () => {
        posting.mutate({
            title, description
        })
    };

    return (
        <center>

            <h1>Create Post</h1>
            <input 
                onChange={(e) => {
                    setTitle(e.target.value);
                    console.log(setTitle)
                }}
                placeholder="username" style={{height:"30px", width:"300px", margin: "10px", padding: "5px", outline:"none"}}/>

            <br/>

            <textarea 
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
                 placeholder="comment"  style={{height:"120px", width:"300px", margin:"10px", padding: "5px", outline:"none"}} />

            <br/>

            <button disabled={posting?.isLoading} onClick={handleSubmit} style={{width:"100px", height: "40px", borderRadius:"5px", outline:"none", cursor: "pointer"}}>add post</button>

            <br/>
            <br/>
            <br/>


            <center>
                {""}
                <h2>All Posts</h2>

                {getPost.isLoading ? <h2>Loading...</h2> : null} 

                {getPost?.data?.map((props: any) => (
                    <Link to={`/detail/${props._id}`}>
                        <div 
                            key={props?._id}
                            style={{
                                height:"30px",
                                width:"300px",
                                marginTop: "15px",
                                border: "1px solid silver",
                                borderRadius:"5px 5px 0 0"
                            }}
                        >{props?.title}</div>
                        <div
                            style={{
                                height:"70px",
                                width:"300px",
                                border: "1px solid silver",
                                borderRadius:"0 0 5px 5px"}}
                                >{props?.description}</div>
                    </Link>
                ))}
            </center>
        </center>

    )
}