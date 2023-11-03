import { useEffect, useState } from "react";
import { Todo,Data } from "../types";

export function useFetchData() {
    const [data, setData] = useState<Todo[]>([])
    const [error, setError] = useState<Error | null>(null)
    const [isLoading,setIsLoading] = useState(false)  

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/todos")
                const resData = await res.json();
                setData(resData);
            } catch (error) {
                setError(error as Error);
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    return {data,error,isLoading} as Data
}
