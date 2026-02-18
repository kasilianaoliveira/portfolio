import { ReactNode } from "react";


type SectionType = {
  children: ReactNode
}

export function Section({ children }: SectionType) {
  return (
    <section className="mx-auto mt-6 w-full max-w-[1600px] md:mt-14">
      {children}
    </section>
  )
}