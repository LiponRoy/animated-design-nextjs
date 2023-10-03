import { title } from 'process';
import React from 'react'

interface buttonProps{
    title: string,
    onClick:(event: React.MouseEvent<HTMLElement>)=>void,
}

const Button = ({title,onClick}:buttonProps) => {
  return (
    <>
      <button onClick={onClick} className=' w-full bg-slate-500 text-white p-4 rounded-md'>
{title}
      </button>
    </>
  )
}

export default Button
