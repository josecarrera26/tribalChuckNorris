import { useEffect, useState } from "react"
import { getJokeCN } from "../helpers/getJokeCN";

export const useGetJoke = () => {
  const  [joke, setJoke] = useState([]);
  const [isLoading, setIsLoading]= useState([]);

  console.log(joke);
  const getJoke = async () => {
    const jokes = [];
    for (let i = 1; i <= 20; i++){
        const newJoke = await getJokeCN();
        jokes.push(newJoke);
    }
    setJoke(jokes);
    setIsLoading(false)
  }

  useEffect(()=>{
    getJoke();
  },[])

  return {
    joke,
    isLoading
  }
}
