import React from 'react'

interface inputProps{
    placeHolder:string
}

const Input = ({placeHolder}:inputProps) => {
  return (
    <>
      <input className=' w-full h-10 border-2 my-1 p-1 rounded-md border-slate-400' placeholder={placeHolder} type="text" id="fname" name="fname"></input>
    </>
  )
}

export default Input
