import { Menu } from '../Menu/Index';
import girlImg from "../../assets/girl.svg";

import "./styles.css";

//adicionar portfolio verdadeiro
import portfolioPDF from "../../assets/portfolio.pdf"
import { Title } from '../Title/Index';
import { Button } from '../Button/Index';
export const Home = () => {
  return (

    <article className='container' id='home'>

      <img src={girlImg} alt="Garota em um computador" className="moving-image " />
      <div className='content'>
        <Title title='Desenvolvedora Front End & UI Designer' isPink />
        <Button hrefOption={portfolioPDF} title="Download CV" />
        {/* <button className='button-download' >
          <a href={portfolioPDF} target="_blank">Download CV</a>
        </button> */}
      </div>

    </article>

  )
}
