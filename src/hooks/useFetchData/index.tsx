import { useEffect, useState } from "react";
import { Data,Todo } from "../../types";

export const useFetchData = () => {
	const [data,setData] = useState<Todo[]>([])
	const [error,setError] = useState<Error | null>(null) 
	const [isLoading,setIsLoading] = useState(false) 

	useEffect(() => {
		async function fetchTodo() {
			setIsLoading(true)
			try {
				const res = await fetch("https://jsonplaceholder.typicode.com/todos");	
				const resData = await res.json();
				setData(resData);
			} catch (error) {
				setError(error as Error);
			} finally {
				setIsLoading(false)
			}
		}

		fetchTodo();
	},[]);

	return {data,error,isLoading} as Data;
}
