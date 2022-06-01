import { useState } from 'react' 
import { Camera, Trash } from 'phosphor-react'
import html2canvas from 'html2canvas'

import Loading from '../Loading'

type ScreenshotButtonProps = {
  onScreenshotSuccess: (value: string | null) => void,
  screenshot: string | null
}

const ScreenshotButton = ({ screenshot, onScreenshotSuccess }: ScreenshotButtonProps) => {
  const [takingScreenshot, setTakingScreenshot] = useState(false)

  const handleTakeScreenshot = async () => {
    setTakingScreenshot(true)
    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png')

    onScreenshotSuccess(base64image)
    setTakingScreenshot(false)
  }

  if (screenshot) {
    return (
      <button
        type="button"
        onClick={() => onScreenshotSuccess(null)}
        style={{ backgroundImage: `url(${screenshot})`, backgroundPosition: 'right bottom', backgroundSize: 180 }} 
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors">
        <Trash weight="fill" />
      </button>
    )
  }

  return (
    <button
      type="button"
      className="w-[40px] h-[40px] flex justify-center items-center p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
      onClick={handleTakeScreenshot}>
      {takingScreenshot ? <Loading size={18} /> : <Camera className="w-6 h-6 text-zinc-100" />}
    </button>
  )
}

export default ScreenshotButton
