import React, { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import "./styles.css"

interface TitleProps {
  title: string;
  isPink?: boolean;
}


export const Title = ({ title, isPink = false }: TitleProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <h1 className='title'>{title}<span className={isPink ? 'pink' : 'purple'}>.</span></h1>
  )
}
