import AugustineScreen from '../Views/Augustine';
import HerculesScreen from '../Views/Hercules';
import HomeScreen from '../Views/Home';
import BassScreen from '../Views/Bass';
import FanadScreen from '../Views/Fanad';
import LindauScreen from '../Views/Lindau';
import PeggysScreen from '../Views/Peggys';
import AboutScreen from '../Views/About';
import CreditsScreen from '../Views/Credits';

/* Icon key is optional. It must be of type string and its value should match a valid provider icon
  name.
  To omit the icon just pass null on its value.
*/
export default [
  {name: 'Home', screen: HomeScreen, icon: 'home'},
  {name: 'Augustine', screen: AugustineScreen, icon: 'lighthouse'},
  {name: 'Hercules', screen: HerculesScreen, icon: 'ferry'},
  {name: 'Bass', screen: BassScreen, icon: 'compass-outline'},
  {name: 'Fanad', screen: FanadScreen, icon: 'ship-wheel'},
  {name: 'Lindau', screen: LindauScreen, icon: 'sign-direction'},
  {name: 'Peggys', screen: PeggysScreen, icon: 'lighthouse-on'},
  {name: 'About', screen: AboutScreen, icon: 'information-outline'},
  {name: 'Credits', screen: CreditsScreen, icon: 'account-circle'},
];
