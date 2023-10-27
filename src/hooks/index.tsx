import { useEffect, useState } from "react";
import { Todo } from "../types";

export function useFetchData() {
    const [data, setData] = useState<Todo[]>([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos")
            const data = await res.json()
            setData(data)
        }

        fetchData()
    }, [])

    return data
}