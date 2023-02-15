import axios from "axios";

interface iData {
    title: string;
    description: string,
}


export const fetchPost = async () => {
    return axios.get("http://localhost:2020/api/getpost").then((res) => res.data)
}

export const fetchSingleData = async (id: any) => {
    return axios.get(`http://localhost:2020/api/getonepost/${id}`).then((res) => res.data)
}

export const creatingPostData = async ({ title, description}: iData) => {
    return await axios.post("http://localhost:2020/api/createpost", {
        title,
        description
    }).then((res) => res.data)
}

