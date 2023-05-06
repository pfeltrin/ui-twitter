import { ChatCircle, ArrowClockwise, Heart } from 'phosphor-react';
import  { Link } from 'react-router-dom'
import './Tweet.css';

interface TweetProps {
  content: string
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className='tweet'>
      <img src="https://github.com/pfeltrin.png" alt="Patrick Feltrin" />

      <div className='tweet-content'>
        <div className='tweet-content-header'>
          <strong>Patrick Feltrin</strong>
          <span>@pfeltrin</span>
        </div>

        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button type='button'>
            <ChatCircle />
            20
          </button>

          <button type='button'>
            <ArrowClockwise />
            10
          </button>

          <button type='button'>
            <Heart />
            30
          </button>
        </div>
      </div>
    </Link>
  )
}