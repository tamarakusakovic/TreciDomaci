import axios from "axios";
import { useEffect, useState } from "react";


export default function useGet(path) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(path)
            .then(res => {
                setData(res.data);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [path])

    return { data, loading, setData };
}