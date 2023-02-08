import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import "./styles.css"

interface TitleProps {
  title: string;
  isPink?: boolean;
}


export const Title = ({ title, isPink = false }: TitleProps) => {
  return (
    <h1 className='title'>{title}<span className={isPink ? 'pink' : 'purple'}>.</span></h1>
  )
}
