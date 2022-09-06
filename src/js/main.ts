import 'lazysizes';

import headerNav from './module/headerNav';
import mv from './module/mv';
import scrollAnimation from './animation/scroll';

window.onload = () => {
  headerNav();
  mv();
  scrollAnimation();
};
