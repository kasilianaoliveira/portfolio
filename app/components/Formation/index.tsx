import { Text } from "../Text";

const ENTERPRISES = [
  {
    university: 'Universidade Federal do Ceará',
    course: 'Sistemas de Informação',
    type: 'Bacharelado',
    year: '2019 - 2023',
  },
];


export function Formation() {
  return (
    <div id="formacao">
      <Text classname="text-center">Formação</Text>
      {ENTERPRISES.map((item) => (
        <div className="flex flex-col items-center justify-center 
        bg-[#1E0044] mb-8 md:w-full m-auto rounded-2xl p-5 transition-transform duration-600
          ease-out hover:scale-105 hover:shadow-lg"
          key={item.university}>
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="flex flex-col gap-1">
                <span className="font-semibold">{item.course}</span>
                <span className="text-sm text-purple-100/70 text-wrap">{item.university}</span>
                <span className="text-sm text-purple-100/70 text-wrap">{item.type}</span>
              </div>
            </div>
            <div className="w-40 text-purple-100/50 text-end text-sm">
              <span>{item.year}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}