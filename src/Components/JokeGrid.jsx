import React from 'react'
import { useGetJoke } from '../hooks/useGetJoke'
import { JokeItem } from './JokeItem';

export const JokeGrid = () => {
    const {joke, isLoading} = useGetJoke();
  return (
    
    <>
        <h1>JokeGrid</h1>

        {
            isLoading && (<h2> Cargando...</h2>)
        }

        <div>
        {
            joke.map( (broma)=> (
                <JokeItem key={broma.id}
                {...broma}/> 
            ))
        }
        </div>
        

    </>

  )
}
