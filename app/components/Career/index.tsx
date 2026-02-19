import GreatPlace from "@/app/assets/great.jpg";
import PetSi from "@/app/assets/pet-si.jpg";
import VtexLab from "@/app/assets/vtex.webp";
import Image from "next/image";
import { Text } from "../Text";

const ENTERPRISES = [
  {
    name: 'Great',
    position: 'Desenvolvedora de software',
    year: '2024 - Atualmente',
    image: GreatPlace
  },
  {
    name: 'VTEX Lab',
    position: 'Desenvolvedora de software',
    year: '2022 - 2024',
    image: VtexLab
  },
  {
    name: 'PET SI - UFC',
    position: 'Pesquisa/ desenvolvimento/ organização',
    year: '2022',
    image: PetSi
  }
];


export function Career() {
  return (
    <>
      <Text classname="text-center">Experiência</Text>
      {ENTERPRISES.map((item) => (
        <div className="flex flex-col items-center justify-center 
        bg-[#1E0044] mb-8 md:w-full m-auto rounded-2xl p-5 transition-transform duration-600
          ease-out hover:scale-105 hover:shadow-lg"
          key={item.name}>
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-5">
              {item.image && (
                <div className="">
                  <Image src={item.image} alt={item.name} width={50} height={50} className="rounded-2xl" />
                </div>
              )}
              <div className="flex flex-col gap-1">
                <span className="font-semibold">{item.name}</span>
                <span className="text-sm text-purple-100/70 text-wrap">{item.position}</span>
              </div>
            </div>
            <div className="w-40px text-purple-100/50 text-end text-sm">
              <span>{item.year}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}