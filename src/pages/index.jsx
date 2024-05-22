import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/header';
import { Intro } from '../components/Intro/intro';
import { Pose } from '../components/Pose/pose';
import yoga from '../img/yoga-pose.jpg'
 
//       <Pose src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/cviceni-jogini/master/img/yoga-pose.jpg" />


const HomePage = () => {
  return( 
    <div id="app" className="app container">
      <Header title="Jogíni" />
      <Intro heading="Vítejte mezi Jogíny" text="Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
      Postupně se seznámíte se základními principy jógy, jak přístupovat k
      sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
      svoje tělo, pocity a emoce."/>
      <Pose src={yoga} />
    </div>
  )
}

document.querySelector('#root').innerHTML = render(
  
  <HomePage />
);
