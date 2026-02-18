import { ReactNode } from "react"

//add props padrão do h2 para ele receber
type TextType = {
  children: ReactNode
  classname?: string
}

export function Text({ children, classname }: TextType) {
  return (
    <h2 className={`mb-10 text-3xl font-semibold tracking-tight md:mb-14 md:text-4xl ${classname}`}>
      {children}
    </h2>
  )
}