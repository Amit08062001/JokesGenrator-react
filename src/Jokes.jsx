import { useEffect, useState } from "react"
import './Jokes.css'
export default function Jokes(){
    let URL ="https://official-joke-api.appspot.com/random_joke"
    let [joke ,setJoke] = useState({})
   
     let newJoke = async() => {
        let res = await fetch(URL)
        let response = await res.json()
        console.log(response)
        setJoke({setup : response.setup , punchline: response.punchline})
     }
     useEffect( () => {
        let firstJoke = async() => {
            let res = await fetch(URL)
            let response = await res.json()
            console.log(response)
            setJoke({setup : response.setup , punchline: response.punchline})
         }
        firstJoke() } , []
     )
    return (
        <div>
            <h1> Joke Of The Day</h1>
        <div className="card">
        <h3>Joke!</h3>
        <h4>{joke.setup}</h4>
        <h4>{joke.punchline}</h4>
        <button onClick={newJoke}>Get New Joke</button>
        </div>
        </div>
    )
}