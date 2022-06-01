import { useState } from 'react'

import WidgetClose from '../WidgetClose'
import FeedbackTypeStep from './Steps/FeedbackTypeStep'
import FeedbackContentStep from './Steps/FeedbackContentStep'
import FeedbackSuccessfullyStep from './Steps/FeedbackSuccessfullyStep'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: '/bug.svg',
      alt: ''
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: '/idea.svg',
      alt: ''
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: '/other.svg',
      alt: ''
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes

const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackStatus, setFeedbackStatus] = useState<string | null>(null)

  const handleFeedbackReset = () => {
    setFeedbackStatus(null)
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackStatus === 'sent' ? (
        <FeedbackSuccessfullyStep onFeedbackRestartRequest={handleFeedbackReset} />
      ) : !feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
      ): (
        <FeedbackContentStep
          feedbackType={feedbackType}
          onFeedbackReset={handleFeedbackReset}
          onFeedbackStatus={() => setFeedbackStatus('sent')}
        />
      )}

      <footer>
        <p className="text-xs text-neutral-400">
          Feito com ❤ pela{' '}
          <a href="#" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Rocketseat</a>
        </p>
      </footer>
    </div>
  )
}

export default WidgetForm;