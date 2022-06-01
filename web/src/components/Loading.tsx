interface Props extends React.HTMLAttributes<HTMLDivElement> {
  size: number
}

const Loading = ({ size = 24 }: Props) => {
  return (
    <div className={`w-[${size}px] h-[${size}px] flex justify-center items-center`}>
      <div className={`border-transparent border-t-white border-l-white border-r-2 border-b-2 border-l-2 border-t-2 w-full h-full rounded-full animate-spin`} />
    </div>
  )
}

export default Loading