import AugustineScreen from '../Views/Augustine';
import HerculesScreen from '../Views/Hercules';
import HomeScreen from '../Views/Home';
import BassScreen from '../Views/Bass';
import FanadScreen from '../Views/Fanad';
import LindauScreen from '../Views/Lindau';
import PeggysScreen from '../Views/Peggys';
import AboutScreen from '../Views/About';
import CreditsScreen from '../Views/Credits';

/* Icon key is optional. It must be of type string and its value should match a valid provider icon name */
export default [
  {name: 'Home', screen: HomeScreen, icon: 'home'},
  {name: 'Augustine', screen: AugustineScreen, icon: null},
  {name: 'Hercules', screen: HerculesScreen, icon: null},
  {name: 'Bass', screen: BassScreen, icon: null},
  {name: 'Fanad', screen: FanadScreen, icon: null},
  {name: 'Lindau', screen: LindauScreen, icon: null},
  {name: 'Peggys', screen: PeggysScreen, icon: null},
  {name: 'About', screen: AboutScreen, icon: null},
  {name: 'Credits', screen: CreditsScreen, icon: null},
];
