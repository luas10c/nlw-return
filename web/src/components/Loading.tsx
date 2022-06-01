const Loading = () => {
  return (
    <div className={`w-[24px] h-[24px] flex justify-center items-center`}>
      <div className={`border-transparent border-t-white border-l-white border-r-2 border-b-2 border-l-2 border-t-2 w-full h-full rounded-full animate-spin`} />
    </div>
  )
}

export default Loading