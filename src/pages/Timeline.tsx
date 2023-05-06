import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Timeline.css'

export function TimeLine(){
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Teste',
    'Deu certo twitar!'
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()
    
    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }
  
  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }
  return(
    <main className="timeline">
      <Header  title="Home"/>

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/pfeltrin.png" alt="Patrick Feltrin" />
          <textarea 
          id="tweet"
          value={newTweet}
          onKeyDown={handleHotKeySubmit}
          placeholder="What's happening?"
          onChange={(event) => {
            setNewTweet(event.target.value)
          }} 
        />
      </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />
      })}
    </main>
  )
}