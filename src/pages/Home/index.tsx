import { Sliders } from './components/Sliders';
import { HomeContainer} from './styles';
import { Footer } from './components/Footer';
import { Localization } from './components/Localization';
import { Gastronomy } from './components/Gastronomy';
import { Rooms } from './components/Rooms';
import { Details } from './components/Details';

export function HomePage(){

  return(
    <HomeContainer id="home">
      <Sliders/>
      <Details/>
      <Rooms/>
      <Gastronomy/>
      <Localization/>
      <Footer/>
    </HomeContainer>
  )
}