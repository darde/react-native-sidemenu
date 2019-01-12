import TravelScreen from '../Views/Travel';
import BookingScreen from '../Views/Booking';
import AboutScreen from '../Views/About';
import CreditsScreen from '../Views/Credits';

/* Icon key is optional. It must be of type string and its value should match a valid provider icon
  name.
  To omit the icon just pass null on its value.
*/
export default [
  {name: 'Travel', screen: TravelScreen, icon: 'airplane-takeoff'},
  {name: 'Booking', screen: BookingScreen, icon: 'compass-outline'},
  {name: 'About', screen: AboutScreen, icon: 'information-outline'},
  {name: 'Credits', screen: CreditsScreen, icon: 'account-circle'},
];
