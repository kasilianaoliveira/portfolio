import React, { AnchorHTMLAttributes } from 'react'
import "./styles.css"
interface ButtonProps {
  title: string;
  hrefOption: string
}
export const Button = ({ title, hrefOption }: ButtonProps) => {
  return (
    <button className='button-download' >
      <a href={hrefOption} target="_blank">{title}</a>
    </button>
  )
}
