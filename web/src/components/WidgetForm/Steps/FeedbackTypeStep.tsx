import { feedbackTypes } from '..'
import type {FeedbackType} from '..'

import WidgetClose from '../../WidgetClose'

type FeedbackTypeProps = {
  onFeedbackTypeChange: any
}

const FeedbackTypeStep = ({ onFeedbackTypeChange  }: FeedbackTypeProps) => {
  return (
    <>
      <header>
        <p className="text-xl leading-6">Deixe seu feedback</p>
        <WidgetClose />
      </header>
      <div className="flex py-8 gap-2 w-full">
      {Object.entries(feedbackTypes).map(([key, value]) => {
        return (
          <button
            key={key}
            type="button"
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            onClick={() => onFeedbackTypeChange(key as FeedbackType)}>
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>  
          </button>
        )
      })}
    </div>
    </>
  )
}

export default FeedbackTypeStep