import { useState } from 'react'
import { ArrowLeft } from 'phosphor-react'
import api from '../../../services/api'

import ScreenshotButton from '../ScreenshotButton'
import Button from '../../Button'

import WidgetClose from '../../WidgetClose'

import { feedbackTypes } from '..'
import type { FeedbackType } from '..'

type FeedbackContentStepProps = {
  feedbackType: FeedbackType
  onFeedbackReset: () => void
  onFeedbackStatus: () => void
}

const FeedbackContentStep = ({ feedbackType, onFeedbackReset, onFeedbackStatus }: FeedbackContentStepProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [description, setDescription] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmitFeedback = async (event: React.FormEvent) => {
    event.preventDefault()

    setLoading(true)

    try {
      await api.post('/feedbacks', {
        type: feedbackType,
        description,
        screenshot
      })
  
      onFeedbackStatus()
    } catch(error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <header>
        <button
          type="button"
          onClick={onFeedbackReset}
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100">
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <p className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypes[feedbackType].image.source}
            alt={feedbackTypes[feedbackType].image.alt}
            className="w-6 h-6" />
          {feedbackTypes[feedbackType].title}
        </p>
        <WidgetClose />
      </header>
      <div className="my-4 w-full">
        <form onSubmit={handleSubmitFeedback}>
          <textarea
            className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
            onChange={(event) => setDescription(event.target.value)}
            value={description ?? ''}
            placeholder="Conte com detalhes o que está acontecendo..."
          />
          <footer className="flex gap-2 mt-2"> 
            <ScreenshotButton screenshot={screenshot} onScreenshotSuccess={setScreenshot} />
            <Button type="submit" title="Enviar feedback" isLoading={loading} disabled={!description || loading} />
          </footer>
        </form>
      </div>
    </>
  )
}

export default FeedbackContentStep