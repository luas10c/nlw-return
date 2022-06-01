import Loading from './Loading'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  isLoading: boolean
}

const Button = ({ title, isLoading, ...rest }: Props) => {
  return (
    <button {...rest} className={`${'p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500 disabled:cursor-not-allowed transition-colors'}${rest.className}`}>
      {isLoading ? <Loading size={18} /> : title}
    </button>
  )
}

export default Button