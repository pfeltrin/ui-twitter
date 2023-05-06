import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css';
import { PaperPlaneRight } from "phosphor-react";

export function Status (){
  const [newAnswers, setNewAnswers] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido'!,
    'Parabéns pelo progresso.'
  ])

  function createNewAnswers(event: FormEvent) {
    event.preventDefault()
    
    setAnswers([newAnswers, ...answers])
    setNewAnswers('')
  }
  
  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswers, ...answers])
      setNewAnswers('')
    }
  }
  return (
    <main className="status">
      <Header  title="Tweet"/>
      <Tweet content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia soluta, odio ipsam doloribus beatae ullam possimus consequuntur eaque excepturi aliquam? Sunt beatae quam vero tempora, officia necessitatibus molestias optio alias."/>

      <Separator />

      <form onSubmit={createNewAnswers} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/pfeltrin.png" alt="Patrick Feltrin" />
          <textarea 
          id="tweet" 
          placeholder="Tweet your answer" 
          value={newAnswers}
          onKeyDown={handleHotKeySubmit}
          onChange={(event) => {
            setNewAnswers(event.target.value)
          }}/>
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
          </button>
      </form>

      {answers.map(answers => {
        return <Tweet key={answers} content={answers} />
      })}
    </main>
  )
}